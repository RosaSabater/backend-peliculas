const {Usuario} = require ("../models");
const jwt = require ('jsonwebtoken');


const auth = async(req,res,next) => {

    const token = req.headers.authorization;

    try {

        jwt.verify(token, 'geekshubs');

        const usuario = await Usuario.findOne({

            where: {
                token
            }

        })

        if (!usuario) {
            return res.status(401).send('No estás autorizado')
        }

        req.usuario = usuario;
        next()


    } catch (error) {
        
        console.error(error);
        res.status(401).send(error);

    }

}


module.exports = auth;