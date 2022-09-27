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
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,

    },
    description: {
      type: DataTypes.TEXT
    },
    stock: {
      type: DataTypes.INTEGER
    },
    categorie: {
      type: DataTypes.STRING
    },
    discount: {
      type: DataTypes.INTEGER
    },
    brand: {
      type: DataTypes.TEXT
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
