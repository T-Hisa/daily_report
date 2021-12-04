const app = require('../app')

app.action("adding-high-action", async ({ ack, body, context }) => {
  ack();
  console.log('clicked!!!!')
  console.log('body is ')
  console.log(body)
  console.log("context is ");
  console.log(context);
  try {
    const result = await app.client.chat.update({
      token: context.botToken,
      ts: body.message.ts,
      channel: body.channel.id,
      blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*The button was clicked!*'
            }
          }
        ],
        text: 'Message from Test App'
    })
    console.log(`result is ${result}`)
  } catch (err) {
    console.error(err)
  }
});