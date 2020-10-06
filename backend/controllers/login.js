const {Usuario} = require ("../models");

const login = async (req,res) => {

    let body = req.body;

    let email = body.email;
    let password = body.password;

    try {

        let encontrado = await Usuario.findOne({

            where: {
              email: email
            }

        });

        if (encontrado === null) {

            res.status(401).send('Credenciales inválidas.');

        }else {

            if (password === encontrado.password){

                res.send('Usuario encontrado.')

            }else {

                res.status(401).send('Credenciales inválidas')

            }
        }
        
    } catch (error) {

        console.log(error)

    }
}

module.exports = login;