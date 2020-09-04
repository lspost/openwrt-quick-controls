module.exports = (req, res, next) => {
  console.log(req.body);
  const { name, devices, accessAllowed } = req.body;
  const processedName = name.trim();
  const processedDevices = devices.map(({ name, address }) => ({
    name: name.trim(),
    address: address.trim()
  }));

  req.processedGroup = { name: processedName, devices: processedDevices };
  next();
};
