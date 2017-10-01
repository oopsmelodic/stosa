import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('main');
  this.route('items', function() {
    this.route('show', { path: '/:items_name' });
  });
  this.route('factories');
});

export default Router;
