import JSONSerializer from '@ember-data/serializer/json-api';

export default class TaskSerializer extends JSONSerializer {
    // serialize(value){
    //     console.log(value);
    //     return super.serialize(value);
    // }
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        // payload = { data : payload };
        console.log("payload");
        console.log(payload);

        return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
    }
}