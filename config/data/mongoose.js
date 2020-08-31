const mongoose = require('mongoose');
const keys = require('../keys');

mongoose.connect(keys.MONGO_CONNECTION_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
