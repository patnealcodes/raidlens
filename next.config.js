const { WARCRAFT_LOGS_KEY } = process.env;

// Expose the following ENV vars to the client
module.exports = {
  env: {
    WARCRAFT_LOGS_KEY
  }
}
