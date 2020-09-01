const mongoose = require('mongoose');
const processGroupData = require('../middlewares/processGroupData');

const Group = mongoose.model('groups');

module.exports = app => {
  app.get('api/groups', requireLogin, async (req, res) => {
    const groups = await Group.find({});
    res.send(groups);
  });

  app.post('/api/groups', requireLogin, processGroupData, async (req, res) => {
    const { name, devices } = req.processedGroup;
    const group = new Group({
      name,
      devices
    }).save();
    res.send(group);
  });

  app.put('/api/groups/:id', async (req, res) => {
    //
  });
};
