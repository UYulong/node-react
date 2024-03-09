const UserModel = require("../../models/UserModel")

const UserService = {
  login: async ({ username, password }) => {
    return UserModel.find({
      username,
      password
    })
  },

  queryUserInfo: ({ username, _id }) => {
    return UserModel.find({ username, _id })
  }
}

module.exports = UserService