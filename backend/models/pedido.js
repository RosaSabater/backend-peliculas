'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Usuario);
    }
  };
  Pedido.init({
    estado: {
      type: DataTypes.ENUM('alquilada', 'enviado', 'entregado')
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PeliculaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};