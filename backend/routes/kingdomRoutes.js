const express = require('express');
const router = express.Router();
const kingdomControler = require('../controllers/kingdomController');
const { authMiddleware } = require('../auth');

router.post('/createKingdom', kingdomControler.createKingdom );

module.exports = router;