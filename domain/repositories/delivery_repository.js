const Delivery = require('../models/delivery_model');

async function findOneByDeliveryId(deliveryId) {
  try {
    return await Delivery.findOne({ delivery_id: deliveryId });
  } catch (error) {
    console.error('Error finding delivery by ID:', error);
    throw error;
  }
}

async function findAll() {
  try {
    return await Delivery.find();
  } catch (error) {
    console.error('Error finding deliveries:', error);
    throw error;
  }
}

async function create(delivery) {
  try {
    return await new Delivery(delivery).save();
  } catch (error) {
    console.error('Error creating delivery:', error);
    throw error;
  }
}

async function updateOne(deliveryId, updateData) {
  try {
    return await Delivery.findOneAndUpdate({ delivery_id: deliveryId }, updateData, { new: true });
  } catch (error) {
    console.error('Error updating delivery:', error);
    throw error;
  }
}

async function deleteOne(deliveryId) {
  try {
    return await Delivery.findOneAndDelete({ delivery_id: deliveryId });
  } catch (error) {
    console.error('Error deleting delivery:', error);
    throw error;
  }
}

module.exports = { findOneByDeliveryId, findAll, create, updateOne, deleteOne };
