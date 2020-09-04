module.exports = (req, res, next) => {
  const groupData = {};

  if (
    req.body.name &&
    typeof req.body.name === 'string' &&
    req.body.name.trim().length > 0
  ) {
    groupData.name = req.body.name.trim();
  }

  if (
    req.body.devices &&
    Array.isArray(req.body.devices) &&
    req.body.devices.length > 0
  ) {
    const devices = req.body.devices
      .map(device => {
        if (device.name && device.address) {
          return { name: device.name.trim(), address: device.address.trim() };
        } else return undefined;
      })
      .filter(device => device !== null && device !== undefined);

    if (devices.length > 0) {
      groupData.devices = devices;
    }
  }

  if (
    req.body.accessAllowed !== undefined &&
    req.body.accessAllowed !== null &&
    typeof req.body.accessAllowed === 'boolean'
  ) {
    groupData.accessAllowed = req.body.accessAllowed;
  }

  if (!groupData) {
    res.status(400).send({ error: 'bad request' });
  }

  req.groupData = groupData;

  next();
};
