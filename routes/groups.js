const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const processGroupData = require('../middlewares/processGroupData');

const Group = mongoose.model('groups');

module.exports = app => {
  app.get('/api/groups', requireLogin, async (req, res) => {
    const groups = await Group.find({});
    res.send(groups);
  });

  app.post('/api/groups', requireLogin, processGroupData, async (req, res) => {
    const group = await new Group(req.groupData).save();
    res.send(group);
  });

  app.put(
    '/api/groups/:id',
    requireLogin,
    processGroupData,
    async (req, res) => {
      const group = await Group.findOneAndUpdate(
        { _id: req.params.id },
        req.groupData,
        { new: true, useFindAndModify: false }
      ).exec();
      res.send(group);
    }
  );

  app.delete('/api/groups/:id', requireLogin, async (req, res) => {
    await Group.deleteOne({ _id: req.params.id });
    res.send({ completed: true });
  });
};
