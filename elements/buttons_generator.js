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
