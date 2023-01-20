const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, { algorithms: "HS512" }, (err, decoded) => {
    if (err) {
      res.status(400).json({
        error: "invalid token",
        message: "El token no es valido o ya expiro, envia uno correcto",
      });
    } else {
      console.log(decoded);
      next()
    }
  })
  // next();
}

module.exports = authMiddleware;