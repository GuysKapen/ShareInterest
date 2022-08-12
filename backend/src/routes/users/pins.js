import express from 'express';

import pins from '../../controllers/pins';
import auth from '../../controllers/auth';

const routes = express.Router({ mergeParams: true });

routes.use(auth.verifyToken);

routes.route('/')
  .get(pins.list)
  .post(pins.create);

routes.route('/:id')
  .get(pins.read)
  .put(pins.update)
  .delete(pins.delete);

routes.route('/:id/related')
  .get(pins.related)

module.exports = routes;
