const app = require("../app");
const { base_modal_view } = require("../views");
const { findElementByValue, findElementByActionId } = require("./utils");

const ELEMENT_COUNT = require("./ELEMENT_COUNT");

const MIN_ELEMENT_COUNT = 0;

const removingElementFromBlocks = (blocks) => {
  const removingIndex = findElementByActionId(blocks, 'removing');
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
    if (ELEMENT_COUNT["HIGH_LEVEL_ACTION_ELEMENT_COUNT"] > MIN_ELEMENT_COUNT+1) {
      // body['view']['blocks'] から、要素を削除する
      removingElementFromBlocks(base_blocks);
      ELEMENT_COUNT["HIGH_LEVEL_ACTION_ELEMENT_COUNT"]--;
    }
  } else if (priority === "low") {
    if (ELEMENT_COUNT["LOW_LEVEL_ACTION_ELEMENT_COUNT"] > MIN_ELEMENT_COUNT+1) {
      // body['view']['blocks'] から、要素を削除する
      removingElementFromBlocks(base_blocks);
      ELEMENT_COUNT["LOW_LEVEL_ACTION_ELEMENT_COUNT"]--;
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
