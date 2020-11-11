import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

import { listUserController } from './useCases/ListUser'

const routes = Router();

routes.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

routes.get('/users', (request, response) => {
  return listUserController.handle(request, response);
});

export default routes;
