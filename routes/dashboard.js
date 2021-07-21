const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');


// Get Home Dashboard
router.get('/', dashboardController.viewRootDashboard);


module.exports = router;