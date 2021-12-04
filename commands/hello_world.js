const app = require("../app");

const {
  button_generator,
  plain_text_field_generator,
} = require("../elements");

// Listen for a slash command invocation
app.command("/hello_world", async ({ ack, payload, context }) => {
  // Acknowledge the command request
  ack();
  try {
    const result = await app.client.views.open({
      token: context.botToken,
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: payload.trigger_id,
      // View payload
      view: {
        type: "modal",
        callback_id: "my_modal_1",
        submit: {
          type: "plain_text",
          text: "Submit",
          emoji: true,
        },
        close: {
          type: "plain_text",
          text: "Cancel",
          emoji: true,
        },
        title: {
          type: "plain_text",
          text: "Today's Actions",
          emoji: true,
        },
        blocks: [
          {
            type: "divider",
          },
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "High Priority Actions",
              emoji: true,
            },
          },
          // 優先度が高いAction
          plain_text_field_generator("high", 1),
          button_generator('high'),
          // 優先度が低いAction
          plain_text_field_generator("low", 1),
          button_generator('low'),
        ],
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
