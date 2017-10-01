import Ember from 'ember';

export default Ember.Controller.extend({
    selectedFilter: [],
    actions: {
        updateSelection: function (newSelection,value,operation){
            console.log('New Selection:');
            newSelection = JSON.stringify(newSelection);
            this.set('factories',this.get('store').query('factories',
                {length: 100,
                    call:'api',
                    search: newSelection,
                    filter: 'id'}
            ));
            this.set('items',this.get('store').query('items',
                {length: 100,
                    call:'api',
                    search: newSelection,
                    filter: 'factories_id'}
            ));
        }
    }
});
