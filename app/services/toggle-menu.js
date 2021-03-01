import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ToggleMenuService extends Service {
    @tracked isOpen = false;
    @action toggle(){
        this.isOpen = !this.isOpen;
    }       
}
