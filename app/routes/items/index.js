import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var currentSelected = JSON.stringify(this.controllerFor('items').get('selectedFilter'));
        return Ember.RSVP.hash({
            items: this.get('store').query('items', {length: 100,
                call:'api',
                filter: 'factories_id',
                search: currentSelected}),
            allfactories: this.get('store').query('factories', {length: 100,call:'api'}),
            factories : this.get('store').query('factories', {length: 100,
                call:'api',
                filter: 'id',
                search: currentSelected}),
        });
        //return this.get('store').query('items', {length: 100,call:'api'});
    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'items', model.items);
        Ember.set(controller, 'factories', model.factories);
        Ember.set(controller, 'allfactories', model.allfactories);
    }
});
