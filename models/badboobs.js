'use strict';
module.exports = (sequelize, DataTypes) => {
  const BadBoobs = sequelize.define('BadBoobs', {
    id: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {});
  BadBoobs.associate = function(models) {
    // associations can be defined here
  };
  return BadBoobs;
};