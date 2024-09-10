const itemUsecase = require('../domain/usecases/item_usecase');

async function getItem(req, res) {
  try {
    const item = await itemUsecase.getOneByItemId(req.params.itemId);
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

async function getAll(req,res){
    try {
        const item = await itemUsecase.getList();
        res.json(item);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}

async function createItem(req, res) {
  try {
    const newItem = await itemUsecase.createItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function updateItem(req, res) {
  try {
    const updatedItem = await itemUsecase.updateItem(req.params.itemId, req.body);
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function deleteItem(req, res) {
  try {
    await itemUsecase.deleteItem(req.params.itemId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

module.exports = { getItem, getAll, createItem, updateItem, deleteItem };
