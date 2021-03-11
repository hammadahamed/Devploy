import EmberRouter from '@ember/routing/router';
import config from 'ember-devploy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('auth');
  this.route('home', function() {
    // here you can even remove the "right" from the right/:right_id
    //  but, then should give the url as "home/<model or id>" in the browser 
    this.route('details', {path : 'details/:details_id'});
    this.route('loading');
  });
  this.route('about');
  this.route('contact');
  this.route('loading');
  this.route('page-not-found', { path: '/*wildcard' });

  this.route('error');
  this.route('new-task');
});
