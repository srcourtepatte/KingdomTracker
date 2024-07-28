const express = require('express');
const router = express.Router();
const kingdomController = require('../controllers/kingdomController');
const { authMiddleware } = require('../auth');

router.post('/createKingdom', authMiddleware, kingdomController.createKingdom );
router.get('/getuserkingoms', authMiddleware, kingdomController.getUserKingdoms);

module.exports = router;