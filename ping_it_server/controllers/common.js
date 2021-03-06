const commonFunctions = require("../services/common_functions");
const ErrorHandlerClass = require("../services/error_handler_class");
const JwtService = require("../services/jwt_service");
const bcrypt = require("bcrypt");
const User = require("../models/user_model");
const UserFriends = require("../models/user_friend_list");

const common = {
  setUserInDb: function (result) {
    try {
      let secret = commonFunctions.base64encode(result.password);
      //token
      accessToken = JwtService.sign({
        payload: { _id: result._id, email: result.email },
        secret: secret,
        expiry: 30,
      });
      refreshToken = JwtService.refreshSign({
        payload: {
          _id: result._id,
          email: result.email,
        },
      });
      let id=result._id

      return {
        accessToken,
        refreshToken,
        id
      };
    } catch (error) {
      return ErrorHandlerClass.custom(error, 400);
    }
  },

  async addFriendDb(userId, friend) {
    try {
      UserFriends.findOneAndUpdate(
        {
          userId: userId,
        },
        { $push: { friends: friend } },
        (error, success) => {
          return success;
        }
      );
    } catch (error) {
      return ErrorHandlerClass.custom(error, 400);
    }
  },
  removeDataFromUser: function (user) {
    user.password = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined;
    return user;
  },
};

module.exports = common;
