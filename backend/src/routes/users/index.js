import express from 'express';

import users from '../../controllers/users';
import auth from '../../controllers/auth';
import items from './items';
import pins from './pins';

const routes  = express.Router();

routes.use('/:userId/items', users.loadUser, items);
routes.use('/:userId/pins', users.loadUser, pins);

routes.route('/:id')
  .all(auth.verifyToken)
  .get(users.read)
  .put(users.update)
  .delete(users.delete);

routes.route('/')
  .get(auth.verifyToken, users.list)
  .post(users.create);

module.exports = routes;
