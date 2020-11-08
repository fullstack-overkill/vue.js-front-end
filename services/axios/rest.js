import { api } from '@/plugins/axios'
import Service from '../service'

/**
 * @type {Rest}
 */
export default class Rest extends Service {
  /**
   * @param {String} resource
   */
  constructor (resource, options = {}) {
    super(options)
    this.http = api
    this.resource = resource
  }

  store () {
    return this.http.get(this.resource)
  }

  /**
   * Função básica REST que busca todas as instâncias
   *
   * @param {String} url
   * @param {Object} params
   */
  getAll (url, params, config = {}) {
    return this.http.get(
      this.constructor.normalize(this.resource, url),
      {
        params,
        ...config
      }
    )
  }

  /**
   * Função básica REST que busca uma instância
   * apenas
   *
   * @param {String} url
   * @param {Integer|String} id
   * @param {Object} params
   */
  get (url, id, params, config = {}) {
    return this.http.get(
      this.constructor.normalize(this.constructor.normalize(this.resource, url), id),
      {
        params,
        ...config
      }
    )
  }

  /**
   * Função básica REST que cria uma instância
   *
   * @param {String} url
   * @param {Object} data
   */
  create (url, data) {
    return this.http.post(
      this.constructor.normalize(this.resource, url),
      data
    )
  }

  /**
   * Função básica REST que atualiza uma instância
   *
   * @param {String} url
   * @param {Integer|String} id
   * @param {Object} data
   */
  update (url, id, data) {
    return this.http.put(
      this.constructor.normalize(this.constructor.normalize(this.resource, url), id),
      {
        ...data
      }
    )
  }

  /**
   * Função básica REST que remove uma instância
   * por ID
   *
   * @param {String} url
   * @param {Integer|String} id
   */
  delete (url, id) {
    return this.http.delete(
      this.constructor.normalize(this.constructor.normalize(this.resource, url), id)
    )
  }

  /**
   * @param {String} start
   * @param {String} end
   * @returns {String}
   */
  static normalize (start, end) {
    return `${start}/${end}`.replace(/([^:]\/)\/+/g, '$1')
  }
}
