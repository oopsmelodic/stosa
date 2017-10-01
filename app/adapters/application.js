import DS from 'ember-data';

var inflector = Ember.Inflector.inflector;

inflector.irregular('items', 'items/list');
inflector.irregular('factories', 'factories/list');
inflector.irregular('images', 'images/list');
inflector.irregular('colors', 'colors/list');
inflector.irregular('applications', 'applications/create');

export default DS.RESTAdapter.extend({
    host: 'http://api.oopsmelodic.ru'
});
