import Route from '@ember/routing/route';
import { inject } from '@ember/service';
// import { tracked } from '@glimmer/tracking';
// import { action } from '@ember/object';


export default class AuthRoute extends Route {
    @inject toggleMenu; 
     yes() {return true;}
    model(){
        return {
            fname : "harry",
            lname : "potter"
        }
    }
}
