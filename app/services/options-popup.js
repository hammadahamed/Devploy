import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OptionsPopupService extends Service {
    @tracked popupNote = "baby";
    @tracked show = false;

    @action timer(){
        this.show = true;        
        setTimeout(()=>{this.show = false;},1500)
    }

    @action edit(){
        this.popupNote = "edited";
        this.timer();
        
    }
    @action pause(){
        this.popupNote = "paused";  
        this.timer();

    }
    @action cancel(){
        this.popupNote = "cancelled";
        this.timer();

    }
}
