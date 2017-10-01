import Ember from 'ember';

let slides = [
    {'text':'slide1','url':'http://stosa-shop.ru/upload/iblock/70c/70c10dd3503b42748abe9925cc96b6a5.jpg','slide-text':'Text 1'},
    {'text':'slide2','url':'http://stosa-shop.ru/upload/iblock/53b/53baf40879d25989aacc3e0d0b563a9d.jpg','slide-text':'Text 2'},
    {'text':'slide3','url':'http://stosa-shop.ru/upload/iblock/594/594abc4b4c40ea59eea22a8a2a7541dc.jpg','slide-text':'Text 3'}
];

export default Ember.Route.extend({
    //beforeModel() {
    //    this._super(...arguments);
    //    this.replaceWith('main');
    //}
    model() {
        return slides;
    }
});