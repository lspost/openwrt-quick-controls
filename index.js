const express = require('express');

const app = express();

require('./models');
require('./config/data')(app);
require('./config/auth')(app);
require('./routes')(app);

app.listen(process.env.PORT || 5000);
