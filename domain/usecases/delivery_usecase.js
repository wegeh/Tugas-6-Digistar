const deliveryRepository = require('../repositories/delivery_repository');
const { v4: uuidv4 } = require('uuid');

async function getDeliveryById(deliveryId) {
  try {
    return await deliveryRepository.findOneByDeliveryId(deliveryId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getList (){
    try {
        const delivery = await deliveryRepository.findAll();
        return delivery;
    } catch (error) {
        throw new Error('Failed to get list of delivery');
    }
}

async function createDelivery(deliveryData) {
  try {
    const deliveryId = uuidv4();
        const delivery = {
            delivery_id: deliveryId,
            ...deliveryData
        };
    return await deliveryRepository.create(delivery);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateDelivery(deliveryId, updateData) {
  try {
    return await deliveryRepository.updateOne(deliveryId, updateData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteDelivery(deliveryId) {
  try {
    return await deliveryRepository.deleteOne(deliveryId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getDeliveryById, getList, createDelivery, updateDelivery, deleteDelivery };
