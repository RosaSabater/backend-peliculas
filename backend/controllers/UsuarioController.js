// importo Usuario de models

const {Usuario} = require ("../models");



// registro de usuario
const UsuarioController = {

    async registro(req,res) {

        // defino body como req.body para ahorrarme escribir req.body.XXX
        let body = req.body;

        try {
            
            // 
            const usuario = await Usuario.create(body);
            res.send (usuario);

        } catch (error) {
        
            console.log(error)
            res.status(500).send ({msg:error})
            
        }

    },



    async login(req,res) {

        // defino body como req.body para ahorrarme escribir req.body.XXX
        let body = req.body;
    
        // defino body.email y body.password como 'email' y 'password'
        // para ahorrarme escribir
        let email = body.email;
        let password = body.password;
    
        try {
    
            // defino 'encontrado' cuando busque en la db por el email
            // y mete el resultado
            let encontrado = await Usuario.findOne({
    
                // el primer email es el de db, el segundo el body.email
                where: {
                  email: email
                }
    
            });
    
            // si es 'null' da un mensaje de error
            if (encontrado === null) {
    
                res.status(401).send('Credenciales inválidas.');
    
            }else {
    
                // si no es 'null' y la password es correcta da mensaje de encontrado
                if (password === encontrado.password){
    
                    res.send('Usuario encontrado.')
    
                }else {
    
                    // si el password no es correcto da mensaje de error
                    res.status(401).send('Credenciales inválidas')
    
                }
            }
            
        } catch (error) {
    
            console.log(error)
    
        }
    }

};



module.exports = UsuarioController;