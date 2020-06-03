import { Router } from 'express';
import filterListController from '../controllers/FilterList';

const router = Router();

router.get('/', filterListController);
export default router;
