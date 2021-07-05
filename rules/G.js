const emojiList = '7';

{
  module.exports = {
    check(message) { return rule(message); },
  };
}

// Rule 7: Start with character 1. Let A = 1, B = 2... Z = 26.
// For each turn, look at the value of character X, let it be N.
// Move to position X+N in the response. Loop over if past length.
// If, at any point, the character is not A-Z, the rule fails.
// However; if it ends up looping, the rule succeeds.
function rule(message) {

  // Setup for the rule
  const upperMessage = message.toUpperCase();
  const visitList = [];
  let position = 0;
  let limit = 0;

  // Iterate through the rule until a loop or a non-character termination.
  while (limit < message.length + 10) {

    // If we've been here, then a loop has been made
    if (visitList[position]) {
      return emojiList;
    }

    // Get the character code of the current letter, minus 64
    // minus 64 is so A-Z will be the correct 1-26 value
    const moveN = upperMessage.charCodeAt(position) - 64;

    // Not a correct character, game over
    if (moveN < 1 || moveN > 26) {
      return false;
    }

    // Mark that we have been here
    visitList[position] = true;

    // Move to a new position
    position = (position + moveN) % message.length;
    limit = limit + 1;
  }

  // It shouldn't reach this position
  return 'x';
}
