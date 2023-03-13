const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization')
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    try {
      const usuario = jwt.verify(token, process.env.SECRETA)
      req.usuario = usuario
    } catch (error) {
      console.log(error)
      console.log('JWT no Valido')
    }
  }
  return next()
}