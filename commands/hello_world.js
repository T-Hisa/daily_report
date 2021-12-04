const app = require("../app");
const {
  high_button_element,
  low_button_element
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
          {
            type: "input",
            element: {
              type: "plain_text_input",
              action_id: "high_action_1",
            },
            label: {
              type: "plain_text",
              text: "Action 1",
              emoji: true,
            },
          },
          high_button_element,
          // 優先度が低いAction
          {
            type: "input",
            element: {
              type: "plain_text_input",
              multiline: true,
              action_id: "low_action_1",
            },
            label: {
              type: "plain_text",
              text: "Action 1",
              emoji: true,
            },
          },
          low_button_element
        ],
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
