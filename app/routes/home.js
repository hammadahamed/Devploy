import Route from '@ember/routing/route';

export default class HomeRoute extends Route {

  //  PAssing another model not working !!!!!! 

  // usermodel() {
  //   return {
  //           title : "hmd",
  //           customDescription : "formidable"
  //         }
  // }

  async model() {
    var tem =  await fetch("https://devploy.herokuapp.com/tasks").then((k) => k.json());
    return {tem};
  }
}
