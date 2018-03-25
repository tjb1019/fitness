const jwt = require('jsonwebtoken');

exports.generateToken = function(payload, expiration) {
  const secret = process.env.FITNESS_SECRET;
  const options = {expiresIn: expiration};
  return jwt.sign(payload, secret, options);
}
