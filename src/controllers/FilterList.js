import { respondWithSuccess } from '../lib/httpResponse';
import catchAsync from '../lib/catchAsync';
import filterService from '../services/filterService';

export const filterListController = catchAsync(async (req, res, next) => {
  await filterService(req, res, next);
});
