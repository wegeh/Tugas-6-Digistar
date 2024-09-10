const deliveryUsecase = require('../domain/usecases/delivery_usecase');

async function getDelivery(req, res) {
  try {
    const delivery = await deliveryUsecase.getDeliveryById(req.params.deliveryId);
    res.status(200).json(delivery);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

async function getAll(req,res){
    try {
        const delivery = await deliveryUsecase.getList();
        res.json(delivery);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}

async function createDelivery(req, res) { 
    try { 
        const newDelivery = await deliveryUsecase.createDelivery(req.body); 
        res.status(201).json(newDelivery); 
    } catch (error) { 
        console.error(error);
        res.status(400).json({ message: error.message }); 
    } 
}

async function updateDelivery(req, res) {
    try { 
        const updatedDelivery = await deliveryUsecase.updateDelivery(req.params.deliveryId, req.body); 
        res.status(200).json(updatedDelivery); 
    } catch (error) { 
        console.error(error);
        res.status(400).json({ message: error.message }); 
    } 
}

async function deleteDelivery(req, res) {
    try { 
        await deliveryUsecase.deleteDelivery(req.params.deliveryId); 
        res.status(204).send(); 
    } catch (error) { 
        console.error(error);
        res.status(404).json({ message: error.message }); 
    } 
}

module.exports = { getDelivery, getAll, createDelivery, updateDelivery, deleteDelivery };
