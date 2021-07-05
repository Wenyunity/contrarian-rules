const upper = 'QWERTYUIOP';
const mid = 'ASDFGHJKL';
const lower = 'ZXCVBNM';

const fs = require('fs');
const values = JSON.parse(fs.readFileSync('./valueJ.json', 'utf8'));


{
	module.exports = {
    check(message) { return rule(message); },
  };
}

// Rule 10: Let the top, middle, and bottom row of a keyboard be three different groups.
// Count the number of each letter. Divide it by the number of tiles that
// is used of that letter in a scrabble game. Sum the values of each row.
// Whichever one is highest wins. If tied, then bottom > middle > top tiebreak.
function rule(message) {
	// Uppercase message
	let upperMessage = message.toUpperCase();
	upperMessage = upperMessage.replace(new RegExp('[^A-Z]', 'g'), '');

	// Count each letter and divide by the length for each grouping
	let upperTotal = 0;
	let midTotal = 0;
	let lowerTotal = 0;

	for (let i = 0; i < upper.length; i++) {
		const count = upperMessage.split(upper[i]).length - 1;
		upperTotal += count / values[upper[i]];
	}

	for (let i = 0; i < mid.length; i++) {
		const count = upperMessage.split(mid[i]).length - 1;
		midTotal += count / values[mid[i]];
	}

	for (let i = 0; i < lower.length; i++) {
		const count = upperMessage.split(lower[i]).length - 1;
		lowerTotal += count / values[lower[i]];
	}

	if (upperTotal > midTotal && upperTotal > lowerTotal) {
		return 'a';
	}
	else if (midTotal > lowerTotal) {
		return 'b';
	}
	else {
		return 'c';
	}
}
