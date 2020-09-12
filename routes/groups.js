const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const processGroupData = require('../middlewares/processGroupData');
const routerControl = require('../services/routerControl');

const Group = mongoose.model('groups');

const updateMacFilter = async () => {
  const groups = await Group.find({ accessAllowed: false });

  const addresses = groups.reduce((addressesAcum, group) => {
    return addressesAcum.concat(group.devices.map(({ address }) => address));
  }, []);

  console.log(await routerControl.updateMacFilter(addresses));
};

module.exports = app => {
  app.get('/api/groups', requireLogin, async (req, res) => {
    const groups = await Group.find({});

    res.send(groups);
  });

  app.post('/api/groups', requireLogin, processGroupData, async (req, res) => {
    const group = await new Group(req.groupData).save();

    await updateMacFilter();

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

      await updateMacFilter();

      res.send(group);
    }
  );

  app.delete('/api/groups/:id', requireLogin, async (req, res) => {
    await Group.deleteOne({ _id: req.params.id });

    await updateMacFilter();

    res.send({ completed: true });
  });
};
