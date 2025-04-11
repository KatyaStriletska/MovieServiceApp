const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userDAO = require('../dao/userDAO');

const login = async (username, password) => {
    const user = await userDAO.findByUsername(username);
    if (!user) {
        throw new Error('Користувача не знайдено');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Невірний пароль');
    }

    const token = jwt.sign(
        { userId: user._id, role: user.role },
        'your_jwt_secret', // заміни на process.env.JWT_SECRET у продакшені
        { expiresIn: '1h' }
    );

    return { token, username: user.username, role: user.role };
};

module.exports = { login };
