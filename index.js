const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
require('./models');
require('./config/data')(app);
require('./config/auth')(app);
require('./routes')(app);

app.listen(process.env.PORT || 5000);
