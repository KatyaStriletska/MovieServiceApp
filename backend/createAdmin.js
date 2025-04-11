const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

async function createUser() {
    await mongoose.connect('mongodb://localhost:27017/local'); // заміни на свій URL

    const username = 'admin4';
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: hashedPassword,
        role: 'admin4',
    });

    await user.save();
    console.log('Користувача створено!');
    mongoose.disconnect();
}

createUser().catch(console.error);
