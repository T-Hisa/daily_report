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
      value: `removing-${priority}`,
      action_id: `button-action`,
    },
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Add Action",
        emoji: true,
      },
      value: `adding-${priority}`,
      action_id: `button-action`,
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
