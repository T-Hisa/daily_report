const app = require("../app");
const { plain_text_field_generator } = require("../elements");

const findElementByActionId = (blocks, priority) => {
  // "accessory" 要素があり、かつ、その "accessory"要素の "action_id" 要素が actionId に等しい
  // 配列の要素の Index を返す。
  return blocks.indexOf(
    blocks.find(
      (block) =>
        block["accessory"] &&
        block["accessory"]["action_id"] === `adding-${priority}-action`
    )
  );
};

let HIGH_LEVEL_ACTION_COUNT = 1;

const addingElementToBlocks = (blocks, priority) => {
  const addingIndex = findElementByActionId(blocks, priority);
  if (addingIndex > -1) {
    blocks.splice(
      addingIndex,
      0,
      plain_text_field_generator(priority, HIGH_LEVEL_ACTION_COUNT++)
    );
  } else {
    console.error("not find element !");
    throw Error("Not Found Element!");
  }
};

app.action("adding-high-action", async ({ ack, body, context }) => {
  ack();
  const view = body['view']
  // console.log("blocks is ");
  const blocks = view["blocks"];
  // console.log(blocks);
  console.log('before views blocks count')
  console.log(view['blocks'].length);
  addingElementToBlocks(blocks, 'high')
  console.log("after views blocks count");
  console.log(view['blocks'].length);
  console.log("view is ");
  console.log(view);
  // console.log("first element of blocks is");
  // console.log(blocks[0]);
  const json_stringified_view = JSON.stringify(view);

  console.log("context is ");
  console.log(context);
  // body@['view']['blocks'] に、要素を追加する。
  try {
    const result = await app.client.views.update({
      token: context.botToken,
      // blocks: [
      //     {
      //       type: 'section',
      //       text: {
      //         type: 'mrkdwn',
      //         text: '*The button was clicked!*'
      //       }
      //     }
      //   ],
      // text: 'Message from Test App'
      view: view,
    });
    console.log(`result is ${result}`);
  } catch (err) {
    console.error(err);
  }
});
