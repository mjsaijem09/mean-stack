const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

require('dotenv/config');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/', require('./routes/index.route'))

// Databse Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to Databse');
});

const port = 3000 | process.env.PORT 
app.listen(port)