const header_generator = (priority) => ({
  type: "header",
  text: {
    type: "plain_text",
    text: `${priority} Priority Action`,
    emoji: true,
  },
});
module.exports = header_generator
