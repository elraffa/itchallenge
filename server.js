const express = require('express');
var cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

// Connect database
connectDB();

// Use CORS for development
//app.use(cors());

app.disable('etag');

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the API' });
});

app.use('/api/products', require('./routes/products'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.resolve(__dirname, './client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
