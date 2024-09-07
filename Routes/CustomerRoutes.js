// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customerController');
const customerModel = require('../models/customerModel');

// Route to handle form submission
router.post('/submit-form', async (req, res) => {
    try {
        const FullData = req.body;
        console.log(FullData);
        const mongoResponse = await CustomerController.saveFormDataToMongoDB(FullData);
        console.log(mongoResponse);
        const { referralCode, ...userData } = req.body;
        console.log(userData);
        const response = await CustomerController.sendFormDataToServer(userData);
        res.json(response);
    } catch (error) {
        console.error('Error handling form submission:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/api/getCustomers', async (req, res) => {
    try {
        const users = await customerModel.find({});
        res.json(users); // Return the fetched users as JSON response
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
