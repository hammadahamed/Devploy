import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class SiteHeaderComponent extends Component {
    
    @inject toggleMenu;

    @action toggle(){
        this.toggleMenu.isOpen = !this.toggleMenu.isOpen ;
    }   
    
}
