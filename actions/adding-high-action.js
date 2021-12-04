const app = require('../app')

const findElementByActionId = (blocks, actionId) => {
  // "accessory" 要素があり、かつ、その "accessory"要素の "action_id" 要素が actionId に等しい
  // 配列の要素の Index を返す。
  return blocks.indexOf(
    blocks.find(block =>block['accessory'] && block['accessory']['action_id'] === actionId)
  )
}
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