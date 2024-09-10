const express = require('express');
const userHandler = require('../handlers/user_handler');
const roleHandler = require('../handlers/role_handler');
const customerHandler = require('../handlers/customer_handler');
const itemHandler = require('../handlers/item_handler');
const orderHandler = require('../handlers/order_handler');
const paymentHandler = require('../handlers/payment_handler');
const deliveryHandler = require('../handlers/delivery_handler');
const jwtAuth = require('../middlewares/jwt');
const { authenticatePassportJwt } = require('../middlewares/passport-jwt');

const router = express.Router();

// User routes
router.post('/user/login', userHandler.loginUser);
router.post('/user/register', userHandler.registerUser);
router.get('/user', userHandler.getList);
router.get('/user/:userId', userHandler.getUser);
router.put('/user/:userId', userHandler.updateUser);
router.delete('/user/:userId', userHandler.deleteUser);

// Role routes
router.post('/role', roleHandler.createRole);
router.get('/role', roleHandler.getAll);
router.get('/role/:roleId', roleHandler.getRole);
router.put('/role/:roleId', roleHandler.updateRole);
router.delete('/role/:roleId', roleHandler.deleteRole);

// Customer routes
router.post('/customer', customerHandler.createCustomer);
router.get('/customer', customerHandler.getAll);
router.get('/customer/:customerId', customerHandler.getCustomer);
router.put('/customer/:customerId', customerHandler.updateCustomer);
router.delete('/customer/:customerId', customerHandler.deleteCustomer);

// Item routes
router.post('/item', itemHandler.createItem);
router.get('/item', itemHandler.getAll);
router.get('/item/:itemId', itemHandler.getItem);
router.put('/item/:itemId', itemHandler.updateItem);
router.delete('/item/:itemId', itemHandler.deleteItem);

// Order routes
router.post('/order', jwtAuth, orderHandler.createOrder);
router.get('/order', authenticatePassportJwt(), orderHandler.getAll);
router.get('/order/:orderId', authenticatePassportJwt(), orderHandler.getOrder);
router.put('/order/:orderId', authenticatePassportJwt(), orderHandler.updateOrder);
router.delete('/order/:orderId', authenticatePassportJwt(), orderHandler.deleteOrder);

// Payment routes
router.post('/payment', paymentHandler.createPayment);
router.get('/payment', paymentHandler.getAll);
router.get('/payment/:paymentId', paymentHandler.getPayment);
router.put('/payment/:paymentId', paymentHandler.updatePayment);
router.delete('/payment/:paymentId', paymentHandler.deletePayment);

// Delivery routes
router.post('/delivery', deliveryHandler.createDelivery);
router.get('/delivery', deliveryHandler.getAll);
router.get('/delivery/:deliveryId', deliveryHandler.getDelivery);
router.put('/delivery/:deliveryId', deliveryHandler.updateDelivery);
router.delete('/delivery/:deliveryId', deliveryHandler.deleteDelivery);

module.exports = router;
