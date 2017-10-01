import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        $.getJSON('http://api.oopsmelodic.ru/pages/list',{length: '100',search: 'main'}).then(data => {
            var content =Ember.String.htmlSafe(data['data'][0]['content']);
            this.set('pages', content);
        });
    }
});
