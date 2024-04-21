const db = require('../database/models');

const genresController = {
    listGenres: (req, res)=>{
        db.Genre.findAll()
        .then(genres=>{
            return res.status(200).json({
                meta:{
                    status:200,
                    total: genres.length,
                    url: "api/genres"
                },
                data:genres
            })
        })
    },
    detailGenre: async(req,res)=>{
        try {
        const id = parseInt(req.params.id)
        if (!Number.isInteger(id)) {
            throw new Error(`"${req.params.id}" no es un término válido como ID, debe ingresar un número entero`)
        }
        let allGenres = ""
         await db.Genre.findAll()
         .then(genres=>{
            allGenres = genres;
         })
         if (!allGenres) {
            throw new Error ("No se han encontrado géneros")
         }

        const genreRequested = await db.Genre.findByPk(id);
        if (!genreRequested) {
            throw new Error("Género inexistente")
        }
        
        return res.status(200).json({
            meta:{
                status:200,
                total: allGenres.length,
                url: `api/genres/detail/${id}`
            },
            data:genreRequested
        })

        } catch (error) {
            return res.status(400).send(error.message)
        }
        
    }
}

module.exports = genresController;