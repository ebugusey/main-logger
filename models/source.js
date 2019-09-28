'use strict';
module.exports = (sequelize, DataTypes) => {
  const Source = sequelize.define('Source', {
    id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Source.associate = function(models) {
    // associations can be defined here
  };
  return Source;
};