const {Usuario} = require ("../models");


const registro = async(req,res) => {

    let body = req.body;

    let email = body.email;
    let password = body.password;

    try {
        
        const usuarioCreado = await Usuario.create(body);
        res.send (usuarioCreado);

    } catch (error) {
     
        console.log(error)
        res.status(500).send ({msg:error})
        
    }

}

module.exports = registro;


