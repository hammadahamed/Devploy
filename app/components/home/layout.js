import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';


export default class HomeLayoutComponent extends Component {
    @inject toggleMenu;

    @action toggle(){
        this.toggleMenu.isOpen = false ;
    }   
}
