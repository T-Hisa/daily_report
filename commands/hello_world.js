const app = require("../app");
const { base_modal_view } = require("../views");
const { button_generator, plain_text_field_generator } = require("../elements");

// Listen for a slash command invocation
app.command("/hello_world", async ({ ack, payload, context }) => {
  // Acknowledge the command request
  ack();
  console.log('command invoked !!!')
  try {
    const result = await app.client.views.open({
      token: context.botToken,
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: payload.trigger_id,
      // View payload
      view: base_modal_view,
    });
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
});
