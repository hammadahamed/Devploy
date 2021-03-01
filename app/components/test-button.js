import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TestButtonComponent extends Component {
    @action print(){
        console.log(JSON.stringify(this.args.mod));
    }
}
