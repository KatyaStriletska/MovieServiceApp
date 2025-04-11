const express = require('express');
const mongoose = require('mongoose');
const moviesRoutes = require("./routes/film.routes.js");
const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = 8000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/local', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
connectDB();
app.use('/', moviesRoutes);
app.use('/', authRoutes);

app.use(express.static(path.join(__dirname, './react-front')));

app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`);
})