const express = require('express');
const router = express.Router();
const aspectController = require('../controllers/aspectsController');

router.get("/list_heartlands", aspectController.getAllHeartlands);
router.get("/list_charters", aspectController.getAllCharters);
router.get("/list_governments", aspectController.getAllGovernments);

module.exports = router;