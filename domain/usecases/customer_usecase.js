const customerRepository = require('../repositories/customer_repository');
const { v4: uuidv4 } = require('uuid');

async function getOneByUserId(customerId) {
  try {
    return await customerRepository.findOneByUserId(customerId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getList (){
    try {
        const customer = await customerRepository.findAllCustomers();
        return customer;
    } catch (error) {
        throw new Error('Failed to get list of customer');
    }
}

// Create a new customer
async function createCustomer(customerData) {
  try {
    const customerId = uuidv4();
    const customer = {
        customer_id: customerId,
        ...customerData
    };
    return await customerRepository.createCustomer(customer);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateCustomer(customerId, updateData) {
  try {
    return await customerRepository.updateCustomer(customerId, updateData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteCustomer(customerId) {
  try {
    return await customerRepository.deleteCustomer(customerId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getOneByUserId, getList, createCustomer, updateCustomer, deleteCustomer };
