const emojiList = '8';

{
	module.exports = {
    check(message) { return rule(message); },
  };
}

// Rule 8: Take the eight characters before and after each o.
// If any of these individually have NENIC, in any order, this rule passes.
// Caps insensitive.
function rule(message) {

	// Setup for the rule
	const upperMessage = message.toUpperCase();
	let currentPosition = upperMessage.indexOf('O');

	// Check for O's
	while (currentPosition > -1) {

		// Check substring for NENIC
		const string = upperMessage.substring(Math.max(currentPosition - 8, 0),
				Math.min(currentPosition + 9, upperMessage.length));
		// Find NEIC
		if (Math.min(string.indexOf('N'), string.indexOf('E'), string.indexOf('I'),
					string.indexOf('C')) > -1) {
			// Check for two N's
			if (string.indexOf('N') != string.lastIndexOf('N')) {
				return emojiList;
			}
		}

		// Next O
		currentPosition = upperMessage.indexOf('O', currentPosition + 1);
	}

	// No O's pass
	return false;
}
