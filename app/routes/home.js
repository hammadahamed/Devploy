import Route from '@ember/routing/route';
import { action } from '@ember/object';


export default class HomeRoute extends Route {

//   @action async loading(){
//     console.log("loading check - home")
// }

  async model() {
    var modelData =  await fetch("https://devploy.herokuapp.com/tasks").then((k) => k.json());
    // var modelData = await this.store.findAll('task');
    var {data} = modelData;

    console.log(modelData);
    console.log(data);
    return data;
  }
}
