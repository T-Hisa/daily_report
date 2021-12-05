const app = require("../app");
const { plain_text_field_generator } = require("../elements");
const { base_modal_view } = require("../views");
const { findElementByValue } = require("./utils");
const element_count = require("./element_count");

const MAX_ELEMENT_COUNT = 5;

const addingElementToBlocks = (blocks, priority) => {
  const addingIndex = findElementByValue(blocks, priority);
  if (addingIndex > -1) {
    blocks.splice(
      addingIndex,
      0,
      plain_text_field_generator(priority, element_count['HIGH_LEVEL_ACTION_ELEMENT_COUNT']++)
    );
  } else {
    console.error("not find element !");
    throw Error("Not Found Element!");
  }
};

app.action("adding-action", async ({ ack, body, context }) => {
  ack();
  const view = body["view"];

  if (element_count["HIGH_LEVEL_ACTION_ELEMENT_COUNT"] < MAX_ELEMENT_COUNT) {
    const value = body["actions"][0]["value"];
    const base_blocks = base_modal_view["blocks"];
    // body['view']['blocks'] に、要素を追加する。
    addingElementToBlocks(base_blocks, value);
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
