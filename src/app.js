const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error.middleware");
const initModels = require('./models/initModels');
const { userRoutes, authRoutes, productRoutes, cartRoutes, orderRoutes } = require('./routes');
const transporter = require('./utils/mailer');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
    .then(() => console.log("Autenticación a BD exitosa"))
    .catch((error) => console.log(error));

db.sync({ force: false})
    .then(() => console.log("Sincronización de la BD exitosa"))
    .catch((error) => console.log(error));

app.get('/', (req, res) => {
    console.log("Bienvenido al servidor");
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', cartRoutes);
app.use('/api/v1', orderRoutes);

app.use(handleError);

module.exports = app;
