const app = require('../app')

const elements = require('../elements')

app.action("adding-high-action", async ({ ack, body, context }) => {
  ack();
  console.log('clicked!!!!')
  console.log("clicked!!!!");
  console.log("blocks is ");
  const blocks = body["view"]["blocks"];
  console.log(blocks);
  console.log("first element of blocks is");
  console.log(blocks[0]);
  console.log('elements are')
  console.log(elements)
  console.log("context is ");
  console.log(context);
  // body@['view']['blocks'] に、要素を追加する。
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