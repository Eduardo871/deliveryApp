
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("review", {
    description: {
      type: DataTypes.TEXT,
    },
    calification: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};