const express = require('express');
const router = express.Router();
const heartlandController = require('../controllers/heartlandController');

router.get("/list_heartlands", heartlandController.getAllHeartlands);

module.exports = router;