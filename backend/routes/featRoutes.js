const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../auth');
const featController = require("../controllers/featController");

router.get("/kingdomFeats/:id", authMiddleware, featController.getKingdomFeats);
router.post("/:id/addFeat", authMiddleware, featController.addKingdomFeat);
router.get("/allfeats", featController.getAllFeats);

module.exports = router;