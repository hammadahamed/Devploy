import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class AuthModeToggleService extends Service {
    @tracked login = true;
    @tracked signup = false;
    
    @action loginMode(){
        this.login = true;
        this.signup = false;
    }

    @action signupMode(){
        this.signup = true;
        this.login = false;
    }

}
