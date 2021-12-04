const low_button_element = {
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
    value: "click_me_234",
    action_id: "adding-low-action",
  },
};

module.exports = low_button_element
