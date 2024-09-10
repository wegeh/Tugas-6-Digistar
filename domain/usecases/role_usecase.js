const roleRepository = require('../repositories/role_repository');
const { v4: uuidv4 } = require('uuid');

async function getOneByRoleId(roleId) {
  try {
    return await roleRepository.findOneByRoleId(roleId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getList (){
    try {
        const roles = await roleRepository.findAll();
        return roles;
    } catch (error) {
        throw new Error('Failed to get list of roles');
    }
}

async function createRole(roleData) {
    try {
        const roleId = uuidv4();
        const role = {
            role_id: roleId,
            ...roleData
        };
        const createdRole = await roleRepository.create(role);
        return createdRole;
    } catch (error) {
        throw new Error('Failed to create role');
    }
};

async function updateRole(roleId, updateData) {
  try {
    return await roleRepository.updateOne(roleId, updateData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteRole(roleId) {
  try {
    return await roleRepository.deleteOne(roleId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getOneByRoleId, getList, createRole, updateRole, deleteRole };
