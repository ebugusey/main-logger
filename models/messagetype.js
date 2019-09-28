'use strict';
module.exports = (sequelize, DataTypes) => {
  const MessageTypes = sequelize.define('MessageType', {
    id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  MessageTypes.associate = function(models) {
    // associations can be defined here
  };
  return MessageTypes;
};
