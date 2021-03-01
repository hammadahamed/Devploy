import Component from '@glimmer/component';
import { inject } from '@ember/service';

export default class SiteHeaderComponent extends Component {
    
    @inject toggleMenu;
    @inject authModeToggle;    
}
