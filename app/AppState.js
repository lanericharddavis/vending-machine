
import VendingItem from "./Models/VendValue.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import VendValuesController from "./Controllers/VendValuesController.js"

// All data for entire application exits within this object
class AppState extends EventEmitter {
  /** @type {Value[]} */
  money = 0
  values = []
  snacks = [
    new VendingItem(1212, 'bread', 1.50),
    new VendingItem(2323, 'bologna', 2.00),
    new VendingItem(3434, 'cheese', .50),
    new VendingItem(4545, 'water', 1.25)
  ]

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
