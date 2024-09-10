const Role = require('../models/role_model');

async function findOneByRoleId(roleId) {
  try {
    return await Role.findOne({ role_id: roleId });
  } catch (error) {
    console.error('Error finding role by ID:', error);
    throw error;
  }
}

async function findAll() {
  try {
    return await Role.find();
  } catch (error) {
    console.error('Error finding roles:', error);
    throw error;
  }
}

async function create(role) {
  try {
    return await new Role(role).save();
  } catch (error) {
    console.error('Error creating role:', error);
    throw error;
  }
}

async function updateOne(roleId, updateData) {
  try {
    return await Role.findOneAndUpdate({ role_id: roleId }, updateData, { new: true });
  } catch (error) {
    console.error('Error updating role:', error);
    throw error;
  }
}

async function deleteOne(roleId) {
  try {
    return await Role.findOneAndDelete({ role_id: roleId });
  } catch (error) {
    console.error('Error deleting role:', error);
    throw error;
  }
}

module.exports = { findOneByRoleId, findAll, create, updateOne, deleteOne };
