const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
//const cors = require('cors');
const cartRouter = require("./models/cart");
const foodRouter = require("./models/food");
const errController = require('./controllers/error');
const app = express();
const ports = process.env.PORT || 3000;
app.use(bodyParser.json());
//app.use(cors(corsOptions));
// app.use(cors({
//     origin: 'http://localhost:55484' 
//   }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/auth', authRoutes);
app.use('/api/food',foodRouter)
app.use('/api/cart',cartRouter)
app.use(errController.get404);
app.use(errController.get500);
app.listen(ports, () => console.log(`Server is running on port ${ports}`));
