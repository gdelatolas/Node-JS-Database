const express = require('express');

const router = express.Router();

const orgController = require('../controllers/org');

router.get('/same', orgController.getOrgSame);

module.exports = router;