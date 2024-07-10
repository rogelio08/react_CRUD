const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/reactdb';

mongoose.connect(dbURI, {});

// Check for connection errors or successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = {
    db: 'mongodb://localhost:27017/reactdb'
  };

  //add another comment to make a change