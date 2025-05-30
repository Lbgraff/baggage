const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserConnections extends Model {}

UserConnections.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    connection_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'user_connections',
    tableName: 'user_connections',
    timestamps: false,
    underscored: true,
  }
);

module.exports = UserConnections;
