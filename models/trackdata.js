'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrackData = sequelize.define('TrackData', {
    id: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER,
    state: DataTypes.STRING,
    stateTime: DataTypes.DATE
  }, {});
  TrackData.associate = function(models) {
    // associations can be defined here
  };
  return TrackData;
};