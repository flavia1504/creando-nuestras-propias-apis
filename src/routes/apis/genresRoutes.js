const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/apis/genresController');

router.get("/apis/genres", genresController.listGenres);
router.get("/apis/genres/detail/:id", genresController.detailGenre);



module.exports = router;