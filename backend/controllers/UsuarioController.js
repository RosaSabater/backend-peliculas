// importo Usuario de models

const {Pedido} = require ("../models");
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
    
            // defino 'encontrado' cuando busque en la db por el email y password
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
            
            // creo el token del jwt
            const token = jwt.sign({

                // coge el id de la db del usuario encontrado anteriormente
                id: encontrado.id

            }, 'geekshubs', {expiresIn: '1d'});

            // el campo token del model de usuario se llena con el token generado
            encontrado.token = token;
            // y lo guarda
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

            // se define logoutUsuario con el usuario encontrado en db con el email
            let logoutUsuario = await Usuario.findOne({
                
                where : {

                    email

                }

            });

            // vacíamos el campo de token de usuario 
            logoutUsuario.token = null;
            // y lo guardo
            logoutUsuario.save();

            res.send('Has cerrado sesión')

        } catch (error) {
            
            console.log(error)
            res.status(500).send();

        }

    },



    // Eliminar cuenta de usuario

    async delete(req,res) {

        const token = req.headers.authorization;
        let body = req.body;
        let email = body.email;

        try {

            // se define borrar con el email y el token del usuario
            let borrar = await Usuario.findOne({

                where: {

                    email,
                    token

                }

            })

            // y se borra
            await borrar.destroy();  
            res.send('La cuenta ha sido eliminada')

        } catch (error) {
            
            console.log(error)
            res.status(500).send();

        }

    },



    async perfil(req,res) {

        let body = req.body;

        try {

            let buscar = await Pedido.findAll({

                where: {
    
                    UsuarioId: body.UsuarioId

                }
    
            })  

            res.send(buscar)
            
        } catch (error) {
            
            console.log(error)
            res.status(500).send();

        }

    },
    

};

module.exports = UsuarioController;