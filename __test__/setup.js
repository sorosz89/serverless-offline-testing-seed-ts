const { setup: setupDevServer } = require('jest-dev-server');

// Apply env variables.
require('dotenv/config');
const PORT = process.env.SLS_PORT;

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `npm start`,
    launchTimeout: 50000,
    port: PORT,
    usedPortAction: 'kill',
    waitOnScheme: {
      interval: '500',
      resources: [`http://localhost:${PORT}/test`],
    },
  });
};
