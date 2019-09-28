'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    id: DataTypes.INTEGER,
    userId: DataTypes.STRING,
    nick: DataTypes.STRING,
    message: DataTypes.STRING,
    mdate: DataTypes.DATE,
    messageType: DataTypes.INTEGER,
    source: DataTypes.INTEGER,
    channgel: DataTypes.STRING
  }, {});
  Log.associate = function(models) {
    // associations can be defined here
  };
  return Log;
};