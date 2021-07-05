const emojiList = '4';

{
	module.exports = {
    check(message) { return rule(message); },
  };
}

// Rule 4: Does the response have all vowels, AEIOU, in order?
function rule(message) {
	const newMessage = message.toLowerCase();
	if (newMessage.search(new RegExp('a.*e.*i.*o.*u', 'g')) > -1) {
		return emojiList;
	}
	return false;
}
