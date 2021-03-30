import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

// All data for entire application exits within this object
class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    //triggers listeners
    target.emit(prop, value)
    return true
  }
})
