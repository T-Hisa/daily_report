const hight_button_element = {
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
    value: "click_me_123",
    action_id: "adding-high-action",
  },
};

module.exports = hight_button_element;