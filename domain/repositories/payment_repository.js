const Payment = require('../models/payment_model');

async function findOneByPaymentId(paymentId) {
  try {
    return await Payment.findOne({ payment_id: paymentId });
  } catch (error) {
    console.error('Error finding payment by ID:', error);
    throw error;
  }
}

async function findAll() {
  try {
    return await Payment.find();
  } catch (error) {
    console.error('Error finding payments:', error);
    throw error;
  }
}

async function create(payment) {
  try {
    return await new Payment(payment).save();
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
}

async function updateOne(paymentId, updateData) {
  try {
    return await Payment.findOneAndUpdate({ payment_id: paymentId }, updateData, { new: true });
  } catch (error) {
    console.error('Error updating payment:', error);
    throw error;
  }
}

async function deleteOne(paymentId) {
  try {
    return await Payment.findOneAndDelete({ payment_id: paymentId });
  } catch (error) {
    console.error('Error deleting payment:', error);
    throw error;
  }
}

module.exports = { findOneByPaymentId, findAll, create, updateOne, deleteOne };
