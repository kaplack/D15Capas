import UserModel from "../models/user.models.js";
import myConnect from "../config/dbConnect.js";

const getUsersServices = () => {
  myConnect();
  return UserModel.find().then((result) => {
    return result;
  });
};

export default getUsersServices;
