const app = require("../app");
const { base_modal_view } = require("../views");
const { findElementByValue } = require("./utils");

const element_count = require("./element_count");

const MIN_ELEMENT_COUNT = 1;

const removingElementFromBlocks = (blocks, priority) => {
  const removingIndex = findElementByValue(blocks, priority);
  if (removingIndex > -1) {
    blocks.splice(removingIndex-1, 1);
    element_count["HIGH_LEVEL_ACTION_ELEMENT_COUNT"]--;
  }
};

app.action("removing-action", async ({ ack, body, context }) => {
  ack();
  const view = body["view"];

  if (element_count["HIGH_LEVEL_ACTION_ELEMENT_COUNT"] > MIN_ELEMENT_COUNT) {
    const value = body["actions"][0]["value"];
    const base_blocks = base_modal_view["blocks"];
    // body['view']['blocks'] から、要素を削除する
    removingElementFromBlocks(base_blocks, value);
  }

  try {
    await app.client.views.update({
      token: context.botToken,
      view: base_modal_view,
      view_id: view["id"],
    });
  } catch (err) {
    console.error(err);
  }
});
