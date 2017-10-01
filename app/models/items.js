import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    factories_id: DS.attr('number'),
    factories_name: DS.attr('string'),
    description: DS.attr('string'),
    price: DS.attr('number'),
    time_stamp: DS.attr('date'),
    display: DS.attr('number'),
    images: DS.hasMany('images')
});
