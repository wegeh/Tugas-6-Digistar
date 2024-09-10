const Customer = require('../models/customer_model');

async function findOneByCustomerId(customerId) {
  try {
    return await Customer.findOne({ customer_id: customerId }).populate('user'); 
  } catch (error) {
    console.error('Error finding customer by ID:', error);
    throw error;
  }
}

async function findOneByUserId(userId) {
  try {
    return await Customer.findOne({ user: userId }).populate('user'); 
  } catch (error) {
    console.error('Error finding customer by user ID:', error);
    throw error;
  }
}

async function findAllCustomers() {
  try {
    return await Customer.find().populate('user'); 
  } catch (error) {
    console.error('Error finding customers:', error);
    throw error;
  }
}

async function createCustomer(customerData) {
  try {
    const newCustomer = new Customer(customerData);
    return await newCustomer.save();
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
}

async function updateCustomer(customerId, updateData) {
  try {
    return await Customer.findOneAndUpdate(
      { customer_id: customerId },
      { $set: updateData },
      { new: true }
    ).populate('user'); 
  } catch (error) {
    console.error('Error updating customer:', error);
    throw error;
  }
}

async function deleteCustomer(customerId) {
  try {
    return await Customer.findOneAndDelete({ customer_id: customerId });
  } catch (error) {
    console.error('Error deleting customer:', error);
    throw error;
  }
}

module.exports = { findOneByCustomerId, findOneByUserId, findAllCustomers, createCustomer, updateCustomer, deleteCustomer };