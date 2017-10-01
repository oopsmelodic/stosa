import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        sendRequest(){
            console.log(this.get('form.email'));
        }
    }
});
