const db = require('../../database/models');

const moviesController = {
    storeMovie: async(req,res)=>{
        console.log("reqBODY:", req.body);
       try {
            console.log("REQBODY: ", req.body.title);
            if (!req.body.title) {
                throw new Error("Debe ingresar bien los valores")
            }
            const movie = await db.Movie.create(req.body);
    
            return res.status(200).json({movie})
        } catch (error) {
            res.status(400).send(error.message);
        }
        console.log("reqBODY:", req.body);
    },
    destroyMovie:async(req,res)=>{
        try {
            const id = parseInt(req.params.id)
            if (!Number.isInteger(id)) {
                throw new Error(`"${req.params.id}" no es un término válido como ID, debe ingresar un número entero`)
            }
          const deleteMovie =  await db.Movie.findByPk(id)

            if (!deleteMovie) {
                throw new Error ("Pelicula inexistente")
            }

            await db.Movie.destroy({
                where:{
                id
                }
            }).then(resp=>{console.log("borrado")})

          return  res.status(200).json({deleteMovie, "message":"deleted"})

        } catch (error) {
           return res.status(400).send(error.message)
        }
    }
    
}

module.exports = moviesController;