const emojiList = '9';

{
	module.exports = {
    check(message) { return rule(message); },
  };
}

// Rule 9: For each letter that appears twice or more, take the difference between
// the first and last appearance of said letter. If any of these values
// are equal then the rule fails.
function rule(message) {
	// Uppercase all letters
	const upperMessage = message.toUpperCase();
	const difference = [false];

	// Iterate through loop
	for (let i = 0; i < 26; i++) {
		// Loop through each letter
		const letter = String.fromCharCode(i + 65);
		const between = upperMessage.lastIndexOf(letter) - upperMessage.indexOf(letter);

		// No difference, continue on
		if (difference[between] == 0) {
			continue;
		}

		// Check if difference already used
		if (difference[between]) {
			return false;
		}
		// If not, mark it as used
		difference[between] = true;
	}
	// If nothing matched, win
	return emojiList;
}
