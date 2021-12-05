const {
  buttons_generator,
  header_generator,
} = require("../elements");

const base_modal_view = (channel_id) => ({
  type: "modal",
  callback_id: "submit_todays_todo",
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
    // 優先度が高いAction
    header_generator("High"),
    buttons_generator(channel_id),
    // 優先度が低いAction
    {
      type: "divider",
    },
    header_generator("Low"),
    buttons_generator(channel_id),
  ],
});

module.exports = base_modal_view;