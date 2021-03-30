import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  addValue() {
    console.log(5)
    //add the new value to the end of the values array
    //NOTE '.push()' will not trigger the listener
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

//NOTE Singleton Pattern
export const valuesService = new ValuesService();

