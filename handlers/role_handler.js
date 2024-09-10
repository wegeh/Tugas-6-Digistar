const roleUsecase = require('../domain/usecases/role_usecase');

async function getRole(req, res) {
  try {
    const role = await roleUsecase.getOneByRoleId(req.params.roleId);
    res.status(200).json(role);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

async function getAll(req,res){
    try {
        const roles = await roleUsecase.getList();
        res.json(roles);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}


async function createRole(req, res) {
  try {
    const newRole = await roleUsecase.createRole(req.body);
    res.status(201).json(newRole);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function updateRole(req, res) {
  try {
    const updatedRole = await roleUsecase.updateRole(req.params.roleId, req.body);
    res.status(200).json(updatedRole);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function deleteRole(req, res) {
  try {
    await roleUsecase.deleteRole(req.params.roleId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

module.exports = { getRole, getAll, createRole, updateRole, deleteRole };
