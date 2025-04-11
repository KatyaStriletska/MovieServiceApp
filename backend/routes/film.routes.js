const express = require('express');
const MovieController = require("../controllers/film.controller.js");
const authMiddleware = require('../middleware/auth.middleware.js');

const router = express.Router();

router.get('/movies', MovieController.findMany); // get all movies
router.get('/movie/:id', MovieController.findByID); // get one movie by id

router.post('/movie', MovieController.create);
router.put('/movie/:id', MovieController.update);
router.delete('/movie/:id', MovieController.delete);
module.exports = router;