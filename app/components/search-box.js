import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class SearchBoxComponent extends Component {
    @tracked query = '';
    @action print(){
        console.log(this.query);
    }
}
