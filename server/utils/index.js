const jsonwebtoken = require('jsonwebtoken');

const issueJWT = (user) => {
  const { id } = user;
  const payload = {
    sub: id,
    iat: Date.now(),
  };
  const expiresIn = process.env.JWT_EXPIRES_IN;
  const signedToken = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });
  return {
    token: signedToken,
    user,
  };
};

const handleError = (err, req, res, next) => {
  const errStatus = err.statusCode || err.status || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  });
};

module.exports = { issueJWT, handleError };
