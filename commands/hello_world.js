const app = require('../app')


// Listen for a slash command invocation
app.command('/hello_world', async ({ ack, payload, context }) => {
  // Acknowledge the command request
  ack();
  try {
    const result = await app.client.views.open({
      token: context.botToken,
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: payload.trigger_id,
      // View payload
      view: {
        "type": "modal",
        "submit": {
          "type": "plain_text",
          "text": "Submit",
          "emoji": true
        },
        "close": {
          "type": "plain_text",
          "text": "Cancel",
          "emoji": true
        },
        "title": {
          "type": "plain_text",
          "text": "Today's Actions",
          "emoji": true
        },
        "blocks": [
          {
            "type": "divider"
          },
          {
            "dispatch_action": true,
            "type": "input",
            "element": {
              "type": "plain_text_input",
              "action_id": "plain_text_input-action"
            },
            "label": {
              "type": "plain_text",
              "text": "Label",
              "emoji": true
            }
          },
          {
            "dispatch_action": true,
            "type": "input",
            "element": {
              "type": "plain_text_input",
              "dispatch_action_config": {
                "trigger_actions_on": [
                  "on_character_entered"
                ]
              },
              "action_id": "plain_text_input-action"
            },
            "label": {
              "type": "plain_text",
              "text": "Label",
              "emoji": true
            }
          },
          {
            "type": "input",
            "element": {
              "type": "plain_text_input",
              "multiline": true,
              "action_id": "plain_text_input-action"
            },
            "label": {
              "type": "plain_text",
              "text": "Label",
              "emoji": true
            }
          }
        ]
      }
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});