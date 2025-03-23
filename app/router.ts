import EmberRouter from '@ember/routing/router';
import config from 'gts-2025-03-23/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // Add route declarations here
});
