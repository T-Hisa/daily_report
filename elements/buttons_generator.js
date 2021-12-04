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
      value: "dummy_remove",
      action_id: `remove-${priority}`,
    },
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Add Action",
        emoji: true,
      },
      value: "dummy_add",
      action_id: `add-${priority}`,
    },
  ],
});
// {
//   type: "section",
//   text: {
//     type: "mrkdwn",
//     text: " ",
//   },
//   accessory: {
//     type: "button",
//     text: {
//       type: "plain_text",
//       text: "Add more action",
//       emoji: true,
//     },
//     value: "dummy",
//     action_id: `adding-${priority}-action`,
//   },
// }

module.exports = buttons_generator;
