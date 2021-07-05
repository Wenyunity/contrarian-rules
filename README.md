# contrarian-rules

# Description

This was the code for the ContrarianBonus bot. What follows was how the bot was used.

## Invisible Rules
The questions aren't posted. Instead, you will need to DM ContrarianBonus to find out what the rules are.

For questions 1-9, it will react with 1-9 for one result and will not react for the other.
For question 10, it will react with A, B, or C since it is a three way question.

Your messages have a limit of 240 characters and to prevent bot limits there is also a ~6 second delay between checks.
If you disobey this you will either get a no-entry (too long) or a clock (too fast).

## Hidden Messages
All players will have a hidden message buffer where their most recent messages will be private.

After you fill up your hidden message buffer, your oldest messages will be posted publically in a channel as the newer messages push the older ones out of the buffer. Moving response ideas into this public channel is not recommended but keeping it in your hidden message queue is 100% fair.

# Rules
Rule 1 (A): Does the response have a period?

Rule 2 (B): Is the response's length a multiple of seven?

Rule 3 (C): Is the most common non-space character in your response uniquely 'e'?

Rule 4 (D): Does the response have all vowels, AEIOU, in order?

Rule 5 (E): Is there a word such that its length is >0 and a divisor of its pos?

Rule 6 (F): Given the following map, go through your response. You will start where your first character is. Go through your response. If a letter is adjacent (no diagonals), you must move to it. Is your ending position a distance of at least four spaces from your starting spot?

Rule 7 (G): Start with character 1. Let A = 1, B = 2... Z = 26. For each turn, look at the value of character X, let it be N. Move to position X+N in the response; Loop over the response if you go past the end. If, at any point, the character is not A-Z, the rule fails. However; if it ends up at a previously visited character, the rule succeeds.

Rule 8 (H): Take the eight characters before and after each o. If any of these individually have NENIC, in any order, this rule passes. Caps insensitive.

Rule 9 (I): For each letter that appears twice or more, take the difference between the first and last appearance of said letter. If any of these values are equal then the rule fails.

Rule 10 (J): Count the number of each letter. Divide it by the number of tiles that is used of that letter in an English scrabble game. Sum the letters in the same row of a QWERTY keyboard. Whichever one is highest wins. If tied, then bottom (C) > middle (B) > top (A) tiebreak.
