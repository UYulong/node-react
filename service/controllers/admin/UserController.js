const UserService = require("../../services/admin/UserService");
const JWT = require("../../utils/JWT");

const UserController = {
  login: async (req, res) => {
    const result = await UserService.login(req.body)
    if (result.length === 0) {
      res.send({
        success: true,
        status: 'error',
        type: 'account',
        msg: '用户名与密码不匹配'
      })
    } else {
      // console.log('login result', result);
      const { _id, username } = result[0]
      const token = JWT.generate({ _id, username }, '1d')
      res.header('authorization', token)

      res.send({
        success: true,
        status: 'ok',
      })
    }
  },

  queryUserInfo: async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
    const { username, _id } = JWT.verify(token)
    console.log('queryUserInfo', username);

    const result = await UserService.queryUserInfo({ username, _id })
    console.log(result);
    if (result.length === 0) {
      res.send({
        success: true,
        status: 'error',
        msg: '获取用户信息失败！'
      })
    } else {
      const { username: name, gender, _id: userid } = result[0]

      res.send({
        success: true,
        status: 'ok',
        data: {
          name,
          gender,
          userid,
          access: 'admin'
        }
      })
    }
  }
}

module.exports = UserController