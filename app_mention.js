const app = require('./app')
console.log('debug')
console.log(app)

app.event("app_mention", async ({ event, context, client, say }) => {
  try {
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