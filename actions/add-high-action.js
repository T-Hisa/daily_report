const app = require("../app");
const { plain_text_field_generator } = require("../elements");
const { base_modal_view } = require("../views");

const findElementByActionId = (blocks, priority) => {
  // "accessory" 要素があり、かつ、その "accessory"要素の "action_id" 要素が actionId に等しい
  // 配列の要素の Index を返す。
  return blocks.indexOf(
    blocks.find(
      (block) =>
        block["accessory"] &&
        block["accessory"]["action_id"] === `add-${priority}`
    )
  );
};

let HIGH_LEVEL_ACTION_COUNT = 2;

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

app.action("add-high", async ({ ack, body, context }) => {
  ack();
  const view = body["view"];
  const base_blocks = base_modal_view["blocks"];
  addingElementToBlocks(base_blocks, 'high')
  // body['view']['blocks'] に、要素を追加する。
  try {
    const result = await app.client.views.update({
      token: context.botToken,
      view: base_modal_view,
      view_id: view["id"],
    });
    console.log(`result is ${result}`);
  } catch (err) {
    console.error(err);
  }
});
