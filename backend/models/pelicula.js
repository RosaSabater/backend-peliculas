'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Pedido, {through: models.PedidoPelicula});
    }
  };
  Pelicula.init({
    original_title: DataTypes.STRING,
    description: DataTypes.TEXT,
    backdrop_path: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};