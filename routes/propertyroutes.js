const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/properties', propertyController.getAllProperties);
router.post('/add-property', propertyController.createProperty);

module.exports = router;
