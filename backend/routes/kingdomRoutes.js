const express = require('express');
const router = express.Router();
const kingdomController = require('../controllers/kingdomController');
const { authMiddleware } = require('../auth');

router.post('/createKingdom', kingdomController.createKingdom );
router.get('/getuserkingoms', kingdomController.getUserKingdoms);

module.exports = router;