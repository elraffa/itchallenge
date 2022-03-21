const express = require('express');
var cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, './client/build')));

// Connect database
connectDB();

// Use CORS
app.use(cors());

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the API' });
});

app.use('/api/products', require('./routes/products'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
