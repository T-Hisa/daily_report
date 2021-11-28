const app = require('../app')

app.event("app_mention", async ({ event, context, client, say }) => {
  try {
    console.log(`event is ${event.toSource()}`);
    console.log(`context is ${context.toSource()}`);
    console.log(`client is ${client.toSource()}`);
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Thanks for the mention <@${event.user}>! Here's a button`
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Button",
              emoji: true
            },
            value: "click_me_123",
            action_id: "first_button"
          }
        }
      ]
    });
  } catch (error) {
    console.error(error);
  }
});