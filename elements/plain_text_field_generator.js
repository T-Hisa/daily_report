const plain_text_field_generator = (priority, number) => (
  {
    type: "input",
    element: {
      type: "plain_text_input",
      action_id: `${priority}_action_${number}`,
    },
    label: {
      type: "plain_text",
      text: `Action ${number}`,
      emoji: true,
    },
  }
)

module.exports = plain_text_field_generator