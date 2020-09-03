const mongoose = require('mongoose');
const { Schema } = mongoose;

const deviceSchema = new Schema({
  name: String,
  address: String
});

module.exports = deviceSchema;
