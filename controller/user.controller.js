const { getUsersServices } = require("../services/user.service");

const getUsersController = (req, res) => {
  getUsersServices().then((datos) => res.json(datos));
};

module.exports = { getUsersController };
