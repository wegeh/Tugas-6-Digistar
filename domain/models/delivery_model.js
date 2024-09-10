const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  delivery_id: { 
    type: String, 
    required: true, 
    unique: true 
  },
  order_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Order' 
  },
  delivery_date: { 
    type: Date 
    
  },
  status: { 
    type: String, 
    default: 'Pending' 
  },     
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  },
  updated_at: { 
    type: Date, 
    default: Date.now 
  }
}, { strict: false });

const Delivery = mongoose.model('Delivery', deliverySchema);
module.exports = Delivery;
