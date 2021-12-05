const app = require("../app");
const { base_modal_view } = require("../views");
const { findElementByValue } = require("./utils");

const element_count = require("./element_count");

const MIN_ELEMENT_COUNT = 1;

const removingElementFromBlocks = (blocks, priority) => {
  const removingIndex = findElementByValue(blocks, priority);
  if (removingIndex > -1) {
    blocks.splice(removingIndex-1, 1);
  }
};

app.action("removing-action", async ({ ack, body, context }) => {
  ack();
  const view = body["view"];
  const priority = body["actions"][0]["value"];
  const base_blocks = base_modal_view["blocks"];

  if (priority === "high") {
    if (element_count["HIGH_LEVEL_ACTION_ELEMENT_COUNT"] > MIN_ELEMENT_COUNT) {
      // body['view']['blocks'] から、要素を削除する
      removingElementFromBlocks(base_blocks, priority);
      element_count["HIGH_LEVEL_ACTION_ELEMENT_COUNT"]--;
    }
  } else if (priority === "low") {
    if (element_count["LOW_LEVEL_ACTION_ELEMENT_COUNT"] > MIN_ELEMENT_COUNT) {
      // body['view']['blocks'] から、要素を削除する
      removingElementFromBlocks(base_blocks, priority);
      element_count["LOW_LEVEL_ACTION_ELEMENT_COUNT"]--;
    }
  } else {
    console.error(`Unexpected priority value ${priority}`);
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
