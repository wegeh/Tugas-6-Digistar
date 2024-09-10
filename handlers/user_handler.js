const userUsecase = require('../domain/usecases/user_usecase');

async function getUser(req, res) {
  try {
    const user = await userUsecase.getOneByUserId(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

async function getList(req, res) {
    try {
      const users = await userUsecase.getList();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
}

async function registerUser(req, res) {
  try {
    const newUser = await userUsecase.register(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const token = await userUsecase.login({ email, password });
      res.json({ message: "Success login!", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

async function updateUser(req, res) {
  try {
    const updatedUser = await userUsecase.updateOne(req.params.userId, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    await userUsecase.deleteOneUser(req.params.userId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
}

module.exports = { getUser, getList, registerUser, loginUser, updateUser, deleteUser };
