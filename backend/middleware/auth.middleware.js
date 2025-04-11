const jwt = require('jsonwebtoken');

const JWT_SECRET = 'yourSecretKey'; // 🔐 або винеси в .env

module.exports = function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
/*
* module.exports = function onlyAdmin(req, res, next) {
  try {
    const userRole = req.user.role;
    if (userRole !== 'admin') {
      return res.status(403).json({ message: 'Доступ лише для адміністратора' });
    }
    next();
  } catch (e) {
    res.status(403).json({ message: 'Помилка доступу' });
  }
};

*/