const mongoose = require('mongoose');
const { Schema } = mongoose;

const deviceSchema = new Schema({
  name: String,
  macAddress: String
});

mongoose.model(deviceSchema, 'devices');
