const emojiList = '5';

{
	module.exports = {
    check(message) { return rule(message); },
  };
}

// Rule 5: Is there a word such that its length is >0 and a divisor of its pos?
function rule(message) {
	const words = message.split(' ');
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > 0) {
			if (!((i + 1) % words[i].length)) {
				return emojiList;
			}
		}
	}
	return false;
}
