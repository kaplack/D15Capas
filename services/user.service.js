const UserModel = require("../models/user.models");
const myConnect = require("../config/dbConnect");

const getUsersServices = () => {
  myConnect;
  return UserModel.find().then((result) => {
    return result;
  });
};

module.exports = {
  getUsersServices,
};
