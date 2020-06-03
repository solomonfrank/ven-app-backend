import { Router } from 'express';

import filterRoute from './filterRoute';
import searchRoute from './searchRoute';

const apiRouter = Router();

apiRouter.use('/api/v1/filter-data', filterRoute);
apiRouter.use('/api/v1/search', searchRoute);

export default apiRouter;
