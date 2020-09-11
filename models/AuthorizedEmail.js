const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorizedEmailSchema = new Schema({
  email: String
});

mongoose.model('authorized_emails', authorizedEmailSchema);
