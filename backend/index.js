const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
//const cors = require('cors');
const errController = require('./controllers/error');
const app = express();
const ports = process.env.PORT || 3000;
app.use(bodyParser.json());
//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/auth', authRoutes);
app.use(errController.get404);
app.use(errController.get500);
app.listen(ports, () => console.log(`Server is running on port ${ports}`));