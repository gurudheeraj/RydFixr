const jwt = require('jsonwebtoken');
const Fixpert = require('../models/Fixpert');
const secretKey = process.env.JWT_SECRET;

const verifyFixpert = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const fixpert = await Fixpert.findById(decoded.id);

    if (!fixpert) {
      return res.status(401).json({ message: 'Invalid token or customer not found' });
    }

    req.fixpert = fixpert; // attach customer to request for use in controllers
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized', error: err.message });
  }
};

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach the decoded token to the request object
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token is invalid or expired' });
  }
};


module.exports = {
  verifyFixpert,
  authenticateJWT
}
