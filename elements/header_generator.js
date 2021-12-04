const header_generator = (priority) => ({
  type: "header",
  text: {
    type: "plain_text",
    text: `${priority} Priority Actions`,
    emoji: true,
  },
});
module.exports = header_generator
