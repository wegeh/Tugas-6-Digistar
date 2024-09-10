const Order = require('../models/order_model');

async function findOneByOrderId(orderId) {
  try {
    return await Order.findOne({ order_id: orderId });
  } catch (error) {
    console.error('Error finding order by ID:', error);
    throw error;
  }
}

async function findAll() {
  try {
    return await Order.find();
  } catch (error) {
    console.error('Error finding orders:', error);
    throw error;
  }
}

async function create(order) {
  try {
    return await new Order(order).save();
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

async function updateOne(orderId, updateData) {
  try {
    return await Order.findOneAndUpdate({ order_id: orderId }, updateData, { new: true });
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
}

async function deleteOne(orderId) {
  try {
    return await Order.findOneAndDelete({ order_id: orderId });
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
}

module.exports = { findOneByOrderId, findAll, create, updateOne, deleteOne };
