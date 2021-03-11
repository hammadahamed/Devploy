import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';


export default class DetailsTestListOptionsComponent extends Component {

    @inject optionsPopup;    
    
    @tracked open = false;

    @action menuOptionToggle(){
        this.open = !this.open;
    }

}
