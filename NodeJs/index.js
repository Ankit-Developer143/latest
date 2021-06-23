const express = require('express')
const bodyParser = require("body-parser");
const {mongoose} = require('./db.js')
const cors = require('cors')



const app = express();

app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:4200'}));


var employeeController = require('./controllers/employeeController');

app.use('/employee',employeeController);
















const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port! http://localhost:${port}`))