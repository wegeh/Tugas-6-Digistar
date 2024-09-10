const paymentRepository = require('../repositories/payment_repository');
const { v4: uuidv4 } = require('uuid');

async function getPaymentById(paymentId) {
  try {
    return await paymentRepository.findOneByPaymentId(paymentId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getList (){
    try {
        const payment = await paymentRepository.findAll();
        return payment;
    } catch (error) {
        throw new Error('Failed to get list of payment');
    }
}

async function createPayment(paymentData) {
  try {
    const paymentId = uuidv4();
        const payment = {
            payment_id: paymentId,
            ...paymentData
        };
    return await paymentRepository.create(payment);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updatePayment(paymentId, updateData) {
  try {
    return await paymentRepository.updateOne(paymentId, updateData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deletePayment(paymentId) {
  try {
    return await paymentRepository.deleteOne(paymentId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getPaymentById, getList, createPayment, updatePayment, deletePayment };
