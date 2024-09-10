const customerUsecase = require('../domain/usecases/customer_usecase');

async function getCustomer(req, res) {
  try {
    const customer = await customerUsecase.getOneByUserId(req.params.customerId);
    res.status(200).json(customer);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

async function getAll(req,res){
    try {
        const customer = await customerUsecase.getList();
        res.json(customer);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}

async function createCustomer(req, res) {
  try {
    const newCustomer = await customerUsecase.createCustomer(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function updateCustomer(req, res) {
  try {
    const updatedCustomer = await customerUsecase.updateCustomer(req.params.customerId, req.body);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function deleteCustomer(req, res) {
  try {
    await customerUsecase.deleteCustomer(req.params.customerId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

module.exports = { getCustomer, getAll, createCustomer, updateCustomer, deleteCustomer };
