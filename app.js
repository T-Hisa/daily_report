// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// module.exports = app

// require('./actions')
// require('./events')
// require('./commands')
// require('./views')

// // All the room in the world for your code
// const start_app = async () => {
//   await app.start(process.env.PORT || 3000);

//   console.log("⚡️ Bolt app is running!");
// }

// start_app()
app.command("/hello_world", async ({ ack, payload, context }) => {
  // Acknowledge the command request
  ack();

  console.log("command request arrived !!!!!!!");
  try {
    const result = await app.client.chat.postMessage({
      token: context.botToken,
      // Channel to send message to
      channel: payload.channel_id,
      // Include a button in the message (or whatever blocks you want!)
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "#40650 *Subject* 3.5 hours",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Click me!",
            },
            action_id: "button_abc",
            style: "danger",
          },
        },
      ],
      // Text in the notification
      text: "Message from Test App",
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

// Listen for a button invocation with action_id `button_abc`
// You must set up a Request URL under Interactive Components on your app configuration page
app.action("button_abc", async ({ ack, body, context }) => {
  // Acknowledge the button request
  ack();
  console.log("request arrived!!!!");
  try {
    // Update the message
    const result = await app.client.chat.update({
      token: context.botToken,
      // ts of message to update
      ts: body.message.ts,
      // Channel of message
      channel: body.channel.id,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*The button was clicked!*",
          },
        },
      ],
      text: "Message from Test App",
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  // Start your app
  await app.start(8080);

  console.log("⚡️ Bolt app is running!");
})();
