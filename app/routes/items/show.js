import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return Ember.RSVP.hash({
            item: this.get('store').queryRecord('items', {length: 1,call:'api',search:{value:params.items_name}}),
            images: this.get('store').query('images', {length: 100,call:'api',search:{value:params.items_name}}),
            colors: this.get('store').query('colors', {length: 100,call:'api',search:{value:params.items_name}}),
        });
    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'item', model.item);
        Ember.set(controller, 'images', model.images);
        Ember.set(controller, 'colors', model.colors);
    }
});
