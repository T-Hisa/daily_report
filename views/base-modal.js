const { buttons_generator, plain_text_field_generator } = require("../elements");

const base_modal_view = {
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
    plain_text_field_generator("high", 1),
    buttons_generator("high"),
    // 優先度が低いAction
    plain_text_field_generator("low", 1),
    buttons_generator("low"),
  ],
};

module.exports = base_modal_view