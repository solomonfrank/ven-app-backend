import catchAsync from '../lib/catchAsync';
import searchService from '../services/searchService';

const searchController = catchAsync(async (req, res, next) => {
  await searchService(req, res, next);
});

export default searchController;
