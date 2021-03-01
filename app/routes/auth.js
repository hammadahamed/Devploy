import Route from '@ember/routing/route';
// import { action } from '@ember/object';


export default class AuthRoute extends Route {
    model(){
        return {
            fname : "harry",
            lname : "potter"
        }
    }
}
