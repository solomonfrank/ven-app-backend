import Model from '../models';
import { filtration } from '../lib/helpers';

const { carOwner } = Model;

const searchService = async (req, res, next) => {
  const owners = await carOwner.findAndCountAll(
    filtration(req.body, req.query.start, req.query.end)
  );

  return res.status(200).json({
    status: 'success',
    payload: owners,
  });
};

export default searchService;
