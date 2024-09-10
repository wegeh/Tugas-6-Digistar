const orderUsecase = require('../domain/usecases/order_usecase');

async function getOrder(req, res) {
  try {
    const order = await orderUsecase.getOrderById(req.params.orderId);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

async function getAll(req,res){
    try {
        const order = await orderUsecase.getList();
        res.json(order);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}

async function createOrder(req, res) {
  try {
    const newOrder = await orderUsecase.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function updateOrder(req, res) {
  try {
    const updatedOrder = await orderUsecase.updateOrder(req.params.orderId, req.body);
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function deleteOrder(req, res) {
  try {
    await orderUsecase.deleteOrder(req.params.orderId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

module.exports = { getOrder, getAll, createOrder, updateOrder, deleteOrder };
