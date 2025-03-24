const express = require('express');
const MovieController = require("../controllers/film.controller.js");

const router = express.Router();

router.get('/movies', MovieController.findMany); // get all movies
router.get('/movie/:id', MovieController.findByID); // get one movie by id

router.post('/movie', MovieController.create); // create new movie
router.post('/movie/:id', MovieController.update); // update movie by id
router.delete('/movie/:id', MovieController.delete); // delete movie by id

module.exports = router;