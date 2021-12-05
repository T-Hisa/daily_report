const buttons_generator = (channel_id) => ({
  type: "actions",
  elements: [
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Remove Action",
        emoji: true,
      },
      value: channel_id,
      action_id: "removing-action",
    },
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Add Action",
        emoji: true,
      },
      value: channel_id,
      action_id: "adding-action",
    },
  ],
});

module.exports = buttons_generator;
