import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    isEqual: function (){
        return this.get('factoryId') == this.get('item.factories_id');
    }.property('factoryId','item.factories_id'),
    init() {
        this._super(...arguments);
        if (this.get('isEqual')) {
            //Spinner Show;
            $('#spinner').html('');
            var spinner = new Spinner().spin();
            $('#spinner').append(spinner.el);
            $.getJSON('http://api.oopsmelodic.ru/images/list', {
                length: '1',
                call: 'api',
                search: {value: this.get('item.name')}
            }).then(data => {
                this.set('image', data['images'][0]);
                spinner.stop();
            });
        }
    }
});
