const mongoose = require('mongoose');
const { Schema } = mongoose;
const deviceSchema = require('./Device');

const groupSchema = new Schema({
  name: String,
  devices: [deviceSchema]
});

mongoose.model('groups', groupSchema);
