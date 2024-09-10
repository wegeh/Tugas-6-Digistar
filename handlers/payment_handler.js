const paymentUsecase = require('../domain/usecases/payment_usecase');

async function getPayment(req, res) {
  try {
    const payment = await paymentUsecase.getPaymentById(req.params.paymentId);
    res.status(200).json(payment);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

async function getAll(req,res){
    try {
        const payment = await paymentUsecase.getList();
        res.json(payment);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}

async function createPayment(req, res) {
  try {
    const newPayment = await paymentUsecase.createPayment(req.body);
    res.status(201).json(newPayment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function updatePayment(req, res) {
  try {
    const updatedPayment = await paymentUsecase.updatePayment(req.params.paymentId, req.body);
    res.status(200).json(updatedPayment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function deletePayment(req, res) {
  try {
    await paymentUsecase.deletePayment(req.params.paymentId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

module.exports = { getPayment, getAll, createPayment, updatePayment, deletePayment };
