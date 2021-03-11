import RESTAdapter from '@ember-data/adapter/json-api';

export default class TaskAdapter extends RESTAdapter {
    host = "https://devploy.herokuapp.com";
    pathForType() {
        return 'data';
    }
    

}
