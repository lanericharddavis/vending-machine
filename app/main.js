import VendValuesController from "./Controllers/VendValuesController.js";



class App {
  vendValuesController = new VendValuesController()
}

window["app"] = new App();
