import EmberRouter from '@ember/routing/router';
import config from 'ember-deactivate-test-err/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('new-address');
});
