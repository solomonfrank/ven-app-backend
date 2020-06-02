import filterData from '../constant';

const filterService = (req, res, next) => {
  return res.status(200).json({
    status: 'success',
    payload: filterData,
  });
};

export default filterService;
