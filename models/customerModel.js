// models/formDataModel.js
const mongoose = require('mongoose');

const customerModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    source: {
        type: String
    },
    close_date: {
        type: Date,
    },
    affiliate_order_id: String,
    affiliate_order_source: String,
    comments: {
        type: String
    },
    address_attributes: {
        street1: {
            type: String,
            required: true
        },
        street2: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        }
    },
    referralCode: {
        type: String,
    }
});

module.exports = mongoose.model('customerModel', customerModel);
