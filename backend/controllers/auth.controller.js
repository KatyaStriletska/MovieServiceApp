const authService = require('../services/authMiddleware');

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await authService.login(username, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = { login };
