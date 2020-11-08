import Service from '../service'

/**
 * @type {LocalStorage}
 */
export default class LocalStorage extends Service {
    /**
     * @type {String}
     */
    storageKey = 'local_'

    constructor (options = {}) {
      super(options)
    }

    get (key) {
      return localStorage.getItem(this.storageKey + key)
    }

    set (key, value) {
      localStorage.setItem(this.storageKey + key, value)
    }

    remove (key) {
      localStorage.removeItem(this.storageKey + key)
    }
}
