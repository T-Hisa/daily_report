const app = require('../app')

app.action('plain_text_input_action', async ({ ack, body, context }) => {

  ack();
  console.log('plain_text was input !!!!!!!!!')
})