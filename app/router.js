import EmberRouter from '@ember/routing/router';
import config from 'ember-devploy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {  
  this.route('auth');
  this.route('home');
  this.route('about');
  this.route('contact');
  this.route('page-not-found', { path: '/*wildcard' });
});
