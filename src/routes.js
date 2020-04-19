import { Router } from 'express';

const routes = Router();

import UserController from './app/controllers/UserController';
import SearchController from './app/controllers/SearchController';
import SessionController from './app/controllers/SessionsControler';
import RequestController from './app/controllers/RequestController';

routes.post('/user', UserController.store);
routes.get('/all', UserController.index);
routes.get('/user', SearchController.index);

routes.post('/session', SessionController.store);

routes.post('/request', RequestController.store);
routes.get('/request', RequestController.index);
routes.get('/showRequest', RequestController.show);

export default routes;