import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class DetailsTestsComponent extends Component {
    @action async loading(){
        console.log("loading check")
    }
    
    // get obj()
    // {
    //     let obj = this.args.test;
    //     console.log(obj)
    //     return obj[0].title;
    // }
}
