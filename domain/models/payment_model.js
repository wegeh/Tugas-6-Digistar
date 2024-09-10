const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  payment_id: { 
    type: String, 
    required: true, 
    unique: true 
  },
  order_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Order' 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  method: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    default: 'Pending' 
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

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
