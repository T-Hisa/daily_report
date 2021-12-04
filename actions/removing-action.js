const app = require("../app");
const { plain_text_field_generator } = require("../elements");
const { base_modal_view } = require("../views");
const { findElementByValue } = require("./utils");

let { HIGH_LEVEL_ACTION_ELEMENT_COUNT } = require("./element_count");

const MIN_ELEMENT_COUNT = 5;

const removingElementFromBlocks = (blocks, priority) => {
  const addingIndex = findElementByValue(blocks, priority);
  if (addingIndex > -1) {
    blocks.splice(
      addingIndex,
      0,
      plain_text_field_generator(priority, HIGH_LEVEL_ACTION_ELEMENT_COUNT++)
    );
  } else {
    console.error("not find element !");
    throw Error("Not Found Element!");
  }
};

app.action("removing-action", async ({ ack, body, context }) => {
  ack();
  const view = body["view"];
  console.log(body["actions"][0]["value"]);
  const base_blocks = base_modal_view["blocks"];
  if (HIGH_LEVEL_ACTION_ELEMENT_COUNT > MIN_ELEMENT_COUNT) {
    addingElementToBlocks(base_blocks, "high");
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
