import { ProxyState } from "../AppState.js"


class VendValuesService {
  addQuarters() {
    ProxyState.money += .25
    console.log(ProxyState.money)
  }

  addItem(num) {
    ProxyState.money -= num
    console.log(ProxyState.money)
  }

  purchase() {
    ProxyState.money = 0
    console.log(ProxyState.money)
  }

}


export const vendValuesService = new VendValuesService()