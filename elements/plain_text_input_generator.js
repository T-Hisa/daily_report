const plain_text_input_generator = (priority, number) => (
  {
    type: "input",
    block_id: `${priority}_input_${number}`,
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

module.exports = plain_text_input_generator;