const crypto = require('node:crypto');

const requestIdMiddleware = (req, res, next) => {
  const requestId =
    req.get('X-Request-Id') || crypto.randomUUID();

  req.requestId = requestId;

  res.set('X-Request-Id', requestId);

  next();
};

module.exports = requestIdMiddleware;