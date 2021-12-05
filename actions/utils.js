const findElementByValue = (blocks, priority) => {
  // "elements" 要素があり、かつ、その "eleements"要素の "value" 要素が priority に等しい
  // 配列の要素の Index を返す。
  return blocks.indexOf(
    blocks.find(
      (block) => block["elements"] && block["elements"][1]["value"] === priority
    )
  );
};

const findElementByActionId = (blocks, method) => {
  // "elements" 要素があり、かつ、その "eleements"要素の "value" 要素が priority に等しい
  // 配列の要素の Index を返す。
  const method_name = `${method}-action`
  return blocks.indexOf(
    blocks.find(
      (block) =>
        block["elements"] && block["elements"][1]["action_id"] === method_name
    )
  );
};

module.exports = { findElementByValue };
