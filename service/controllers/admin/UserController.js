const UserService = require("../../services/admin/UserService");

const UserController = {
  login: async (req, res) => {
    const result = await UserService.login(req.body)
    console.log('result', result);
    if (result.length === 0) {
      res.send({
        ok: -1,
        msg: '用户名与密码不匹配'
      })
    } else {
      res.send(result)
    }
  }
}

module.exports = UserController