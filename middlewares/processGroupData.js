module.exports = (req, res, next) => {
  const name = req.name.trim();
  const devices = req.devices.map(device => device.trim());

  req.processedGroup = { name, devices };
};
