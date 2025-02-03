const express = require('express');
const router = express.Router();
const heroes = require('../controllers/heroes.controller');

router.post('/superheroes', heroes.createHero);
router.get('/superheroes', heroes.findAll);

module.exports = router;