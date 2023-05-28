const express = require('express');
const router = express.Router();
const Tournament = require('../model/tournament');

const routerController = require('../controllers/controller')


router.get('/', routerController.getAllTournamnets)
router.post('/', routerController.addTournamnets)
router.put('/:id',routerController.updateTournamnet)
router.delete('/:id',routerController.deleteTournament)
router.get('/:id',routerController.getById)
module.exports = router;