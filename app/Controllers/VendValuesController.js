import { ProxyState } from "../AppState.js"
import { vendValuesService } from "../Services/VendValuesService.js"

console.log("Not sure why my innerHTML is not updating on the DOM within VendValuesController.js")
function _draw() {
  document.getElementById("moneyAmount").innerHTML = ProxyState.money

}

export default class VendValuesController {
  constructor() {
    _draw()
    ProxyState.on("", _draw())
  }

  addItem(num) {
    console.log("purchase button works")
    vendValuesService.addItem(num)
  }
  addQuarters() {
    console.log("Quarters button works")
    vendValuesService.addQuarters()
  }

  purchase() {
    console.log("Purchase and Vend Button Works")
    vendValuesService.purchase()
  }

}