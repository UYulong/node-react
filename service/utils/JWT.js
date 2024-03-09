const jsonwebtoken = require('jsonwebtoken')
const privateKey = 'CMS'

const JWT = {
  generate(value, expires) {
    return jsonwebtoken.sign(value, privateKey, { expiresIn: expires })
  },

  verify(value) {
    try {
      return jsonwebtoken.verify(value, privateKey)
    } catch (e) {
      return false
    }
  }
}

module.exports = JWT