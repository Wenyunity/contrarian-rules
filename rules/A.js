const emojiList = '1';

{
  module.exports = {
    check(string) { return rule(string); },
  };
}

// Rule 1: Does the response have a period?
function rule(message) {
  if (message.indexOf('.') > -0.5) {
    return emojiList;
  }
  else {
    return false;
  }
}
