const {Pelicula} = require ("../models");
const {Pedido} = require ('../models')
const { Op } = require("sequelize");


const PeliculasController = {


    async addPelicula(req,res) {

        let body = req.body;

        try {
            
            const pelicula = await Pelicula.create(body)
            res.send ('La pelicula se ha añadido correctamente');

        } catch (error) {

            console.log(error)
            res.status(500).send ('Ha ocurrido un error.')

        }

    },

    async mostrarPeliculas(req,res) {

        try {

            let buscar = await Pelicula.findAll({

                where: {
    
                }
    
            })
    
            res.send(buscar)

        } catch (error) {

            console.log(error)
            res.status(500).send ('Ha ocurrido un error.')

        }
    },

    async alquilarPelicula (req,res) {

        let body = req.body;
        let returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + 3);

        try {
            
            let datosAlquiler = {

                estado: 'alquilada',
                returnDate: returnDate,
                UsuarioId: body.UsuarioId,
                PeliculaId: body.PeliculaId

            }

            const pedido = await Pedido.create(datosAlquiler);

            res.send('La pelicula se ha alquilado correctamente')

        } catch (error) {
            
            console.log(error)
            res.status(500).send ('Ha ocurrido un error.')

        }

    },

    async buscarPorId (req, res) {

        try {

            let pelicula = await Pelicula.findByPk(req.params.id)
            
            res.send(pelicula)

        } catch (error) {

            console.error(error);
            res.status(500).send('Ha habido un problema buscando la pelicula')

        }

    },

    async buscarPorTitulo (req,res) {

        try {
            
            let pelicula = await Pelicula.findAll({

                where: {

                    original_title: {

                        // WHERE original_title like '%algoparecidoauntitulo%';
                        [Op.like]: `%${req.params.titulo}%`

                    }

                }
                
            })

            res.send(pelicula)

        } catch (error) {

            console.error(error);
            res.status(500).send('Ha habido un problema buscando la pelicula')

        }
    },

}

module.exports = PeliculasController;
