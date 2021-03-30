import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
function _draw() {
  console.log(3, 'or', 7)
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}

//NOTE controllers do not hold any data
//Public
export default class ValuesController {
  constructor() {
    //NOTE observer: pss the draw function to be called when the 'values' property gets updated
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    console.log(4)
    valuesService.addValue()
  }

}
