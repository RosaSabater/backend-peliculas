const {Pelicula} = require ("../models");
const {Pedido} = require ('../models')


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





}

module.exports = PeliculasController;