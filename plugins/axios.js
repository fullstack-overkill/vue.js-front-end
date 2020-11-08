import Vue from 'vue'
import axios from 'axios'

import { stytem } from '@/global'
import store from '@/store'
import { storage } from '@/services/storage'

const panel = axios.create({
  baseURL: stytem.panel
})

const api = axios.create({
  baseURL: stytem.api,
  withCredentials: true,
  headers: process.env.NODE_ENV === 'development' ? { 'goscore-token': stytem.token } : { 'goscore-token': stytem.token }
})

const apiOff = axios.create({
  baseURL: stytem.apiOff
})

Vue.use({
  install (Vue) {
    Vue.prototype.$panel = panel
    Vue.prototype.$api = api
    Vue.prototype.$apiOff = apiOff
  }
})

/** Interceptor para as chamadas do Painel que derem erro */
panel.interceptors.response.use(
  response => response,
  function (error) {
    /** Mostra o erro no console */
    const userToken = storage.get('user_token')
    if (error.response.status === 401 && userToken) {
      store.dispatch('auth/clearUserData')
    }

    return Promise.reject(error)
  }
)

/** Interceptor para as chamadas da API */
api.interceptors.request.use(
  function (config) {
    return new Promise((resolve) => {
      const interval = setInterval(async () => {
        if (!store.getters.isRefreshing) {
          clearInterval(interval)
          /** Verifica se há um token no store, e caso haja insere o token na requisição */
          if (store.getters.token) {
            /** Caso o token esteja expirado, ativa a flag de refresh token */
            if (store.getters.tokenExpired) {
              await store.dispatch('auth/setIsRefreshing', true)
            }
            config.headers.Authorization = 'Bearer ' + store.getters.token
          }

          return resolve(config)
        }
      }, 200)
    })
  },
  function (error) {
    return Promise.reject(error)
  }
)

/** Interceptor para as chamadas da API que derem erro */
api.interceptors.response.use(
  response => response,
  async function (error) {
    if (!axios.isCancel(error)) {
      /** Mostra o erro no console */
      let userToken = storage.get('user_token')
      if ((error.response.status === 401 && userToken) || error.response.status === 400) {
        store.dispatch('auth/clearUserData')
      } else if (error.response.status === 403 && (userToken = error.response.data.token)) {
        storage.set('user_token', userToken)
        await store.dispatch('auth/setToken', userToken)
        store.dispatch('auth/setIsRefreshing', false)
        error.config.headers.Authorization = 'Bearer ' + userToken
        error.config.baseURL = undefined
        return api.request(error.config)
      } else if (error.response.status !== 404) {
        /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
        console.error('404')
      }
    }

    return Promise.reject(error)
  }
)

export {
  panel,
  api,
  apiOff
}
