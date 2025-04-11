const User = require('../models/User');

const findByUsername = async (username) => {
    return await User.findOne({ username });
};

module.exports = {
    findByUsername,
};
