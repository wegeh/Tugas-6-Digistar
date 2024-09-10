const User = require('../models/user_model');

async function findOneByUserId(userId) {
  try {
    return await User.findOne({ user_id: userId });
  } catch (error) {
    console.error('Error finding user by ID:', error);
    throw error;
  }
}

async function findOneByEmail(email) {
  try {
      const user = await User.findOne({ email: email });
      return user;
  } catch (error) {
      console.error('Error finding user:', error);
      throw error;
  }
}

async function findAll() {
  try {
    return await User.find();
  } catch (error) {
    console.error('Error finding users:', error);
    throw error;
  }
}

async function create(user) {
  try {
    return await new User(user).save();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function updateOne(userId, updateData) {
  try {
    return await User.findOneAndUpdate({ user_id: userId }, updateData, { new: true });
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

async function deleteOne(userId) {
  try {
    return await User.findOneAndDelete({ user_id: userId });
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

module.exports = { findOneByUserId, findOneByEmail, findAll, create, updateOne, deleteOne };