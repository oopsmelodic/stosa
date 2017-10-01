import DS from 'ember-data';

export default DS.Model.extend({
    items_id: DS.belongsTo('items'),
    name: DS.attr('string'),
    file: DS.attr('string'),
    src: DS.attr('string'),
    title: DS.attr('string'),
    w: DS.attr('number'),
    h: DS.attr('number')
});
