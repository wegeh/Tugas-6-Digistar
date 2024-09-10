const orderRepository = require('../repositories/order_repository');
const { v4: uuidv4 } = require('uuid');

async function getOrderById(orderId) {
  try {
    return await orderRepository.findOneByOrderId(orderId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getList (){
    try {
        const order = await orderRepository.findAll();
        return order;
    } catch (error) {
        throw new Error('Failed to get list of order');
    }
}

async function createOrder(orderData) {
  try {
    const orderId = uuidv4();
    const order = {
        order_id: orderId,
        ...orderData
    };
    return await orderRepository.create(order);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateOrder(orderId, updateData) {
  try {
    return await orderRepository.updateOne(orderId, updateData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteOrder(orderId) {
  try {
    return await orderRepository.deleteOne(orderId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getOrderById, getList, createOrder, updateOrder, deleteOrder };
