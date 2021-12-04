const button_generator = priority => (
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: " ",
    },
    accessory: {
      type: "button",
      text: {
        type: "plain_text",
        text: "Add more action",
        emoji: true,
      },
      value: "dummy",
      action_id: `adding-${priority}-action`,
    },
  }
)

module.exports = button_generator;