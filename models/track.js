'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    id: DataTypes.INTEGER,
    userId: DataTypes.STRING,
    trackNumber: DataTypes.STRING,
    title: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
  };
  return Track;
};