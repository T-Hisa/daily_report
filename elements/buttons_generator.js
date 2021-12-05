const buttons_generator = (priority) => ({
  type: "actions",
  elements: [
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Remove Action",
        emoji: true,
      },
      value: priority,
      action_id: 'removing-action',
    },
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Add Action",
        emoji: true,
      },
      value: priority,
      action_id: 'adding-action',
    },
  ],
});

module.exports = buttons_generator;
