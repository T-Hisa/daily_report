const app = require("../app");
const { base_modal_view } = require("../views");
const { findElementByValue } = require("./utils");

let { HIGH_LEVEL_ACTION_ELEMENT_COUNT } = require("./element_count");

const MIN_ELEMENT_COUNT = 0;

const removingElementFromBlocks = (blocks, priority) => {
  const removingIndex = findElementByValue(blocks, priority);
  if (removingIndex > -1) {
    blocks.splice(removingIndex, 1);
  }
};

app.action("removing-action", async ({ ack, body, context }) => {
  ack();
  const view = body["view"];
  console.log(body["actions"][0]["value"]);
  const base_blocks = base_modal_view["blocks"];
  if (HIGH_LEVEL_ACTION_ELEMENT_COUNT > MIN_ELEMENT_COUNT) {
    removingElementFromBlocks(base_blocks, "high");
    HIGH_LEVEL_ACTION_ELEMENT_COUNT--;
  }
  // body['view']['blocks'] に、要素を追加する。
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
