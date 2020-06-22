// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  let position = str.charAt(index);
  switch (str) {
    case "":
      return undefined;
  }
  return position;
}

console.log(getLetterAtIndex("pitbull", 3));

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");
expect(getLetterAtIndex("Caroline", 6), "n");
expect(getLetterAtIndex("", 12), undefined);
expect(getLetterAtIndex("goodbye", 5), "y");
expect(getLetterAtIndex("water", 0), "w");
expect(getLetterAtIndex("javascript", 4), "s");
expect(getLetterAtIndex("lol", 0), "l");

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
