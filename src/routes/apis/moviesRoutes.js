const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/apis/moviesController');


router.post("/api/movies/create", moviesController.storeMovie)

router.delete("/api/movies/delete/:id", moviesController.destroyMovie)
module.exports = router;