const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cart', {
    status: {
        type: DataTypes.ENUM("processing", "cancel", "complete", "cart"),
        allowNull: false,
        defaultValue: "cart",
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
  });
};
