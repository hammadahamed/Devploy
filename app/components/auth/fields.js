import Component from '@glimmer/component';
import { inject } from '@ember/service';

export default class AuthFieldsComponent extends Component {
    @inject authModeToggle;
}
