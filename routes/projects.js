const express = require('express');

const router = express.Router();

const projectsController = require('../controllers/projects');

// /projects
router.get('/', (res,req) =>{

});

// With the following lines we go to the controllers
router.get('/by_researcher', projectsController.getPorjectsByResearcher);
router.get('/by_executive', projectsController.getPorjectsByExecutive);

module.exports = router;