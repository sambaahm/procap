const Joi = require("joi")

module.exports = {
    register(req, res, next) {
       // const schema = {
         //   email: Joi.string().email(),
           // password: Joi.string().regex(
             //   new RegExp('^[a-zA-Z0-9]{8,32}$')
               // )
        //}
        const schema = Joi.object({
            email: Joi.string().min(4).required().email(),
            password: Joi.string().min(6).required()
        });


        const { error } = schema.validate(req.body)


        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Vous devez fournir une adresse courriel valide.'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Le mot de passe fourni ne correspond pas aux regles suivantes:
              1. Il doit contenir UNIQUEMENT les caracteres suivants: minuscule, majuscule ou numerique.
              2. Il doit contenir au moins 8 caracteres et au plus 32 caracteres..
            `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {

            next();
        }
        
    }
}