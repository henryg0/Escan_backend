const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// routers
const studentRouter = require('./routes/Students');

// handles CORS
app.use(cors());
// allows parsing of JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("hello world!");
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established!")
})

// use routers
app.use('/Students', studentRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})