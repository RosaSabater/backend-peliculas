// importo Usuario de models

const {Usuario} = require ("../models");
const jwt = require ('jsonwebtoken');


const UsuarioController = {

    // registro de usuario
    async registro(req,res) {

        // defino body como req.body para ahorrarme escribir req.body.XXX
        let body = req.body;

        try {
            
            const usuario = await Usuario.create(body);
            res.send (usuario);

        } catch (error) {
        
            console.log(error)
            res.status(500).send ('Ha ocurrido un error. Vuelve a intentarlo rellenando todos los campos o intentándolo con otro email.')
            
        }

    },



    // login de usuario
    async login(req,res) {

        try {

            // defino body como req.body para ahorrarme escribir req.body.XXX
            let body = req.body;
        
            // defino body.email y body.password como 'email' y 'password'
            // para ahorrarme escribir
            let email = body.email;
            let password = body.password;
    
            // defino 'encontrado' cuando busque en la db por el email
            // y mete el resultado
            let encontrado = await Usuario.findOne({
    
                where: {

                  email,
                  password
            
                }
    
            });
    

            // como no existe el email, es null
            // como no lo encuentra entonces es true y lee el mensaje
            if (!encontrado) {
    
                return res.status(401).send('Credenciales inválidas.');
    
            }

            // si no es igual al password encontrado de la db es true y lee el mensaje
            if (password !== encontrado.password){
                
                return res.status(401).send('Credenciales inválidas')
                
            }
            

            const token = jwt.sign({

                id: encontrado.id

            }, 'geekshubs', {expiresIn: '1d'});

            encontrado.token = token;
            encontrado.save();

            res.send({encontrado})
          

        } catch (error) {

            console.log(error)
            res.status(500).send ('.')
            
        }
    },


    // Logout de usuario

    async logout(req,res) {

        let body = req.body;
        let email = body.email;

        try {

            let logoutUsuario = await Usuario.findOne({
                
                where : {
                    email
                }

            });

            logoutUsuario.token = null;
            logoutUsuario.save();

            res.send('Has cerrado sesión')

        } catch (error) {
            
            console.log(error)
            return res.status(500).send();

        }

    },



    // Eliminar cuenta de usuario

    async delete(req,res) {

        const token = req.headers.authorization;
        let body = req.body;
        let email = body.email;

        try {

            let borrar = await Usuario.findOne({

                where: {
                    email,
                    token
                }

            })

            await borrar.destroy();  
            res.send('La cuenta ha sido eliminada')

        } catch (error) {
            
            console.log(error)
            return res.status(500).send();

        }

    }

};

module.exports = UsuarioController;