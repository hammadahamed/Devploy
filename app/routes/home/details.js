import Route from '@ember/routing/route';

export default class HomeDetailsRoute extends Route {

    async model(params){
        // console.log(params);
        var list =  await fetch("https://devploy.herokuapp.com/tasks").then((k) => k.json());
        // console.log(list);
        for(var project of list.data){
            // console.log(project);
            if(project.id==params.details_id){
                console.log(project);
                return project;
            }
        }
    }
}
