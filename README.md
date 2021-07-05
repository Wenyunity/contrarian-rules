# contrarian-rules

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
