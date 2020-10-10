const {Pelicula} = require ("../models");


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

        let buscar = await Pelicula.findAll({

            where: {

            }

        })

        res.send(buscar)
    }





}

module.exports = PeliculasController;