const Item = require('../models/item_model');

async function findOneByItemId(itemId) {
  try {
    return await Item.findOne({ item_id: itemId });
  } catch (error) {
    console.error('Error finding item by ID:', error);
    throw error;
  }
}

async function findAll() {
  try {
    return await Item.find();
  } catch (error) {
    console.error('Error finding items:', error);
    throw error;
  }
}

async function create(item) {
  try {
    return await new Item(item).save();
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
}

async function updateOne(itemId, updateData) {
  try {
    return await Item.findOneAndUpdate({ item_id: itemId }, updateData, { new: true });
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
}

async function deleteOne(itemId) {
  try {
    return await Item.findOneAndDelete({ item_id: itemId });
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
}

module.exports = { findOneByItemId, findAll, create, updateOne, deleteOne };
