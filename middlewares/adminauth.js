
const jwt = require("jsonwebtoken")
const adminauth =  (req, res, next) => {
   const token = req.headers.authorization
   if (token) {
      const decoded = jwt.verify(token,"tough-admin")
      console.log(decoded)
      if (decoded) {
         console.log("decoded",decoded)
         console.log("userid",decoded.userId)
         req.body.userId = decoded.userId
         next()
      }
      else {
         res.send("Login First")
      }
   }
   else {
      res.send("Login First")
   }
}

module.exports = { adminauth }