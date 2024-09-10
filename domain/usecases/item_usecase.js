const itemRepository = require('../repositories/item_repository');
const { v4: uuidv4 } = require('uuid');

async function getOneByItemId(itemId) {
  try {
    return await itemRepository.findOneByItemId(itemId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function createItem(itemData) {
  try {
    const itemId = uuidv4();
    const item = {
        item_id: itemId,
        ...itemData
    };
    return await itemRepository.create(item);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getList (){
    try {
        const item = await itemRepository.findAll();
        return item;
    } catch (error) {
        throw new Error('Failed to get list of item');
    }
}

async function updateItem(itemId, updateData) {
  try {
    return await itemRepository.updateOne(itemId, updateData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteItem(itemId) {
  try {
    return await itemRepository.deleteOne(itemId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getOneByItemId, getList, createItem, updateItem, deleteItem };
