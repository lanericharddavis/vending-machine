import VendValuesController from "./Controllers/VendValuesController.js";



//Entry point into the application
//starts up all of our controllers
//connects ..
class App {
  vendValuesController = new VendValuesController()
}

window["app"] = new App();
