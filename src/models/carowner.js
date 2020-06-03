'use strict';
module.exports = (sequelize, DataTypes) => {
  const carOwner = sequelize.define(
    'carOwner',
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      country: {
        type: DataTypes.STRING,
        // get: function () {
        //   // 'this' allows you to access attributes of the instance
        //   console.log(this.getDataValue([country]));
        //   return this.getDataValue([country]);
        // },
      },
      car_model: DataTypes.STRING,
      car_model_year: DataTypes.INTEGER,
      car_color: {
        type: DataTypes.STRING,
        // get: function () {
        //   // 'this' allows you to access attributes of the instance
        //   return this.getDataValue([car_color]);
        // },
      },

      gender: DataTypes.STRING,
      job_title: DataTypes.STRING,
      bio: DataTypes.STRING,
    },
    { timestamps: false }
  );
  carOwner.associate = function (models) {
    // associations can be defined here
  };
  return carOwner;
};
