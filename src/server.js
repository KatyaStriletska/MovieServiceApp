// RRESTful-сервіс
// У базі даних зберігаються деякі інформаційні одиниці (книжки, статті тощо). Написати сервіс, який забезпечує стандартні CRUD-операції (отримання всіх записів, отримання запису за ID, додавання, оновлення та видалення записів). Доступ до бази даних забезпечувати на основі принципів DAO.
//     Сервіс організувати на основі принципів REST. Сервіс має здійснювати передачу інформації у форматі JSON. Передбачити можливість тестування сервісу за допомогою Postman.
//     Крім реалізації стандартних операцій CRUD, реалізувати бізнес-логіку, яка виходить за межі цих операцій.
//     База даних - MongoDB або MySQL (на вибір).
// Сервіс реалізувати на основі Node.js та Express.
const express = require('express');
const mongoose = require('mongoose');
const moviesRoutes = require("./routes/film.routes.js");
const app = express();
const PORT = 3000;

app.use(express.json());

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
app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`);
})