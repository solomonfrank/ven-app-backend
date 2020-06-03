import Model from '../models';

export function filtration(
  { start_year, end_year, gender, countries, colors },
  start,
  end
) {
  const option = {
    where: {
      car_model_year: carYearFunc(start_year, end_year),
      gender: genderFunc(gender),
      country: countryFunc(countries),
      car_color: colorFun(colors),
    },
    limit: end,
    offset: start,
    logging: true,
  };

  return option;
}

const carYearFunc = (st_year, en_year) => {
  if (st_year && en_year) {
    return { [Model.Sequelize.Op.between]: [st_year, en_year] };
  } else if (st_year || en_year) {
    return st_year || en_year;
  }
};

const genderFunc = (gen) => {
  if (gen) {
    return capitizeGender(gen);
  } else {
    return { [Model.Sequelize.Op.or]: ['Male', 'Female'] };
  }
};

const countryFunc = (ct) => {
  if (ct.length > 0) {
    return {
      [Model.Sequelize.Op.in]: ct,
    };
  } else {
    return {
      [Model.Sequelize.Op.not]: null,
    };
  }
};

const colorFun = (col) => {
  if (col.length > 0) {
    return {
      [Model.Sequelize.Op.in]: col,
    };
  } else {
    return {
      [Model.Sequelize.Op.not]: null,
    };
  }
};

const capitizeGender = (g) => {
  if (g) {
    let val = g[0].toUpperCase() + g.slice(1);
    return val;
  } else {
    return g;
  }
};
