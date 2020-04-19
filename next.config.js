const { WARCRAFT_LOGS_KEY, GA_TRACKING_ID } = process.env;

// Expose the following ENV vars to the client
module.exports = {
  env: {
    WARCRAFT_LOGS_KEY,
    GA_TRACKING_ID
  }
}
