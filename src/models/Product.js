const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.TEXT
    },
    categorie: {
      type: DataTypes.STRING
    },
    stock: {
      type: DataTypes.INTEGER
    },
    discount: {
      type: DataTypes.INTEGER
    },
    amountSold: {
      type: DataTypes.INTEGER,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
