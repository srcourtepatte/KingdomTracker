const express = require('express');
const router = express.Router();
const kingdomController = require('../controllers/kingdomController');
const { authMiddleware } = require('../auth');

router.post('/createKingdom', authMiddleware, kingdomController.createKingdom );
router.get('/getuserkingdoms', authMiddleware, kingdomController.getUserKingdoms);
router.get('/kingdomSheet/:id', authMiddleware, kingdomController.getKingdomSheet);

module.exports = router;