import catchAsync from '../lib/catchAsync';
import filterService from '../services/filterService';

const filterListController = catchAsync(async (req, res, next) => {
  await filterService(req, res, next);
});

export default filterListController;
