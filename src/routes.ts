import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const routes = Router();

routes.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

export default routes;
