// global-setup.js
const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `npm start`,
    launchTimeout: 50000,
    port: 3000,
    usedPortAction: 'kill',
    waitOnScheme: {
      //delay: "Server ready: http://localhost:3000",
      interval: "500",
      resources: ['http://localhost:3000']

    }
  })
  // Your global setup
}