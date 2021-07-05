const emojiList = '6';

const fs = require('fs');
const move = JSON.parse(fs.readFileSync('./moveF.json', 'utf8'));
const result = JSON.parse(fs.readFileSync('./resultF.json', 'utf8'));

{
  module.exports = {
    check(message) { return rule(message); },
  };
}

// Rule 6: Given the following map, go through your response.
// You will start where your first character is.
// If a future letter is adjacent (no diagonals), you must move to it.
// Is your ending position a distance of
//       at least four spaces from your starting spot?
function rule(message) {
  // Format message, replacing all non-space with space
  let upperMessage = message.toUpperCase();
  upperMessage = upperMessage.replace(new RegExp('[^A-Z]', 'g'), ' ');

  // Grab the first letter
  let first = upperMessage[0];
  if (first == ' ') {
    first = 'other';
  }
  let currentLetter = first;

  // Iterate through the response
  for (let i = 1; i < upperMessage.length; i++) {
    // Get the next letter
    let newLetter = upperMessage[i];
    if (newLetter == ' ') {
      newLetter = 'other';
    }

    // Move to it if adjacent
    if (move[currentLetter].includes(newLetter)) {
      currentLetter = newLetter;
    }
  }

  // If within three spaces then this has failed
  if (result[first].includes(currentLetter)) {
    return false;
  }
  // If not then pass
  return emojiList;
}
