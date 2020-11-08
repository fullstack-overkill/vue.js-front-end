/* import { stytem } from '@/global' */

export default {
  methods: {
    stripTags (textHtml) {
      return textHtml.replace(/(<([^>]+)>)/ig, '')
    },
    resume (textHtml, textLength = 100) {
      return textHtml.substring(0, textLength).replace(/(<([^>]+)>)/ig, '') + '...'
    },
    numberFormat (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    parseJwt (token) {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))

      return JSON.parse(jsonPayload)
    }
  }
}
