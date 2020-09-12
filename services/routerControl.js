const { exec } = require('child_process');

const userName = 'root';
const host = '192.168.0.2';
const command = 'scripts/update-mac-deny_list';

const sshCommand = `ssh ${userName}@${host} "${command}"`;

module.exports = {
  updateMacFilter: addresses => {
    let commandWithAddresses = sshCommand;

    if (addresses) {
      addresses.forEach(address => {
        commandWithAddresses += ` ${address}`;
      });
    }

    return new Promise((resolve, reject) => {
      exec(commandWithAddresses, (error, stdout, stderr) => {
        if (error) {
          reject(`error: ${error}`);
        }

        if (stderr) {
          reject(`stderr: ${stderr}`);
        }

        resolve(`stdout: ${stdout}`);
      });
    });
  }
};
