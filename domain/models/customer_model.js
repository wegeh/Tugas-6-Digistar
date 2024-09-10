const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { 
    type: String, 
    required: true 
  },
  city: { 
    type: String, 
    required: true 
  },
  state: { 
    type: String, 
    required: true 
  },
  zip: { 
    type: String, 
    required: true 
  },
  country: { 
    type: String, 
    required: true 
  }
});

const customerSchema = new mongoose.Schema({
  customer_id: {
    type: String,
    unique: true
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  address: addressSchema, 
}, { timestamps: true }); 

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;