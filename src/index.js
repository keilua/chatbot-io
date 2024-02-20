import Router from './router';
import home from './controllers/home';

import './index.scss';

const routes = [{
  url: '/',
  controller: home
}];

new Router(routes);
