const userRepository = require('../repositories/user_repository');
const roleRepository = require('../repositories/role_repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

async function getOneByUserId(userId) {
  try {
    const user = await userRepository.findOneByUserId(userId);
    if (!user) throw new Error('User not found');
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getList() {
    try {
      const users = await userRepository.findAll(); 
      const result = []
      for (const user of users) {
  
        if (user.role) {
  
          const dataRole = await roleRepository.getOneByRoleId(user.role);
  
          const role = {
            role_id: dataRole.role_id,
            name: dataRole.name,
            position: dataRole.position,
            stacks: dataRole.stacks
          };
          
          const userWithRole = {
            user_id: user.user_id,
            username: user.username,
            email: user.email,
            role: role,
            created_at: user.created_at,
            updated_at: user.updated_at
          };
          
          result.push(userWithRole);
        } else {
          const userWithoutRole = {
            user_id: user.user_id,
            username: user.username,
            email: user.email,
            role: null,
            created_at: user.created_at,
            updated_at: user.updated_at
          };
          
          result.push(userWithoutRole);
        }
      }
      return result;
    } catch (error) {
      console.error('Error finding users:', error);
      throw error;
    }
}

async function register(userData) {
  try {
    userData.user_id = uuidv4();
    userData.password = await bcrypt.hash(userData.password, 10); 
    return await userRepository.create(userData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function login(payload) {
    try {
      const checkUser = await userRepository.findOneByEmail(payload.email);
      if (!checkUser) {
        throw new Error('Invalid email or password');
      }
      const user = {
        userId: checkUser.user_id,
        email: checkUser.email,
        password: checkUser.password
      };
      const isValidPassword = await bcrypt.compareSync(payload.password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid email or password');
      }
      const key = process.env.JWT_SECRET; 
      const token = jwt.sign(user, key, { expiresIn: '30m' }); 
      return token;
    } catch (error) {
      console.error('Error login: ', error);
      throw error;
    }
}

async function updateOne(userId, updateData) {
  try {
    return await userRepository.updateOne(userId, updateData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteOneUser(userId) {
  try {
    return await userRepository.deleteOne(userId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getOneByUserId, getList, register, login, updateOne, deleteOneUser };
