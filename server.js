const express = require('express');
var cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

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
