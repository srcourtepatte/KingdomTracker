const express = require('express');
const router = express.Router();
const kingdomController = require('../controllers/kingdomController');
const { authMiddleware } = require('../auth');

router.post('/createKingdom', authMiddleware, kingdomController.createKingdom );
router.get('/getuserkingdoms', authMiddleware, kingdomController.getUserKingdoms);
router.get('/kingdomSheet/:id', authMiddleware, kingdomController.getKingdomSheet);
router.get('/leaders/:id', authMiddleware, kingdomController.getLeaders);
router.post('/leaders/update/:id', authMiddleware, kingdomController.updateLeaders);
router.post('/resources/update/:id', authMiddleware, kingdomController.updateKingdomResources);

module.exports = router;