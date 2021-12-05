const app = require("../app");
const { plain_text_field_generator } = require("../elements");
const { base_modal_view } = require("../views");
const { findElementByValue } = require("./utils");
const element_count = require("./element_count");

const MAX_ELEMENT_COUNT = 5;

const addingElementToBlocks = (blocks, priority, key) => {
  const addingIndex = findElementByValue(blocks, priority);
  if (addingIndex > -1) {
    blocks.splice(
      addingIndex,
      0,
      plain_text_field_generator(
        priority,
        element_count[key]++
      )
    );
  } else {
    console.error("not find element !");
    throw Error("Not Found Element!");
  }
};

app.action("adding-action", async ({ ack, body, context }) => {
  ack();
  const view = body["view"];
  const priority = body["actions"][0]["value"];
  const base_blocks = base_modal_view["blocks"];
  let element_key = "";

  // body['view']['blocks'] に、要素を追加する。
  if (priority === "high") {
    element_key = "HIGH_LEVEL_ACTION_ELEMENT_COUNT";
    if (element_count[element_key] > MIN_ELEMENT_COUNT) {
      addingElementToBlocks(base_blocks, priority, element_key);
    }
  } else if (priority === "low") {
    element_key = "LOW_LEVEL_ACTION_ELEMENT_COUNT";
    if (element_count[element_key] > MIN_ELEMENT_COUNT) {
      addingElementToBlocks(base_blocks, priority, element_key);
    }
  } else {
    console.error(`Unexpected priority value ${value}`);
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
