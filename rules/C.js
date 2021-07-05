const emojiList = '3';

{
	module.exports = {
    check(message) { return rule(message); },
  };
}

// Rule 3: Is the most common non-space character in your response uniquely 'e'?
function rule(message) {
	// lowercase the message and remove spaces
	let lowerMessage = message.toLowerCase();
	lowerMessage = lowerMessage.replace(new RegExp(' ', 'g'), '');

	// Find how many e's are in the message
	const length = lowerMessage.length;
	lowerMessage = lowerMessage.replace(new RegExp('e', 'g'), '');
	const numberE = length - lowerMessage.length;

	console.log(numberE);

	// Check all the rest of the characters
	while (lowerMessage.length > 0) {
		// Check the next character
		let currentChar = lowerMessage.charAt(0);
		const currentLength = lowerMessage.length;

		// Remove all instances of that character
		// Backup in case there are these characters
		if ('\\^$.|?*+()[{'.indexOf(currentChar) > -1) {
			currentChar = '\\' + currentChar;
		}
		lowerMessage = lowerMessage.replace(RegExp(currentChar, 'g'), '');

		// If this is greater than or equal to e,
		// then e cannot be solely the most used character.
		if (currentLength - lowerMessage.length >= numberE) {
			return false;
		}
	}
	// No character had more than e
  return emojiList;
}
