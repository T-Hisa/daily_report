const findElementByValue = (blocks, priority) => {
  // "elements" 要素があり、かつ、その "eleements"要素の "value" 要素が priority に等しい
  // 配列の要素の Index を返す。
  return blocks.indexOf(
    blocks.find(
      (block) => block["elements"] && block["elements"][1]["value"] === priority
    )
  );
};

module.exports = { findElementByValue };
