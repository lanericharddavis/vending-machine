import VendValuesController from "./Controllers/VendValuesController.js";



console.log(1)
class App {
  vendValuesController = new VendValuesController()
}


window["app"] = new App();