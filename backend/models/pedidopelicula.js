'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidoPelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PedidoPelicula.init({
    PeliculaId: DataTypes.INTEGER,
    PedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PedidoPelicula',
  });
  return PedidoPelicula;
};