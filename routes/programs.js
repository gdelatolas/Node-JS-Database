const express = require('express');

const router = express.Router();

const programController = require('../controllers/program');

router.get('/projects/criteria', programController.getProgramsByCriteria);
router.post('/projects/criteria', programController.postProgramsByCriteria);
module.exports = router;