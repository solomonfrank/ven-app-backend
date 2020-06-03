import Model from '../models';
import filterData from '../constant';

const { carOwner } = Model;

const searchService = async (req, res, next) => {
  const { id, start_year, end_year, gender, countries, colors } = req.body;
  const { start, end } = req.query;
  console.log(req.query);

  const capitizeGender = (g) => {
    if (g) {
      let val = g[0].toUpperCase() + g.slice(1);
      console.log(val);
      return val;
    } else {
      return g;
    }
  };
  const option = {
    where: {
      car_model_year: {
        [Model.Sequelize.Op.between]: [start_year, end_year],
      },
      gender: capitizeGender(gender),
      country: {
        [Model.Sequelize.Op.in]: countries,
      },
      car_color: {
        [Model.Sequelize.Op.in]: colors,
      },
    },
    limit: end,
    offset: start,
    logging: true,
  };

  const owners = await carOwner.findAndCountAll(option);

  return res.status(200).json({
    status: 'success',
    payload: owners,
  });
};

export default searchService;
