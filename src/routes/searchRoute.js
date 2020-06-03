import { Router } from 'express';

import searchController from '../controllers/search';

const router = Router();

router.post('/', searchController);
export default router;
