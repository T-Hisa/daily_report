// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

module.exports = app

require('./app_mention')
require('./app_home_opened')

require('./actions/first_button')

// All the room in the world for your code
const start_app = async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
}

start_app()