const emojiList = '2';

{
  module.exports = {
    check(string) { return rule(string); },
  };
}

// Rule 2: Is the response's length a multiple of seven?
function rule(message) {
  if (message.length % 7 == 0) {
    return emojiList;
  }
  else {
    return false;
  }
}
