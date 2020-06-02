import { Router } from 'express';

import filterRoute from './filterRoute';

const apiRouter = Router();

apiRouter.use('/api/v1/filter-data', filterRoute);

export default apiRouter;
