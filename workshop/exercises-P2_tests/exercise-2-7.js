// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  let stringArr = arr[0];
  let times = arr[1];
  let caro = "";

  for (let i = 0; i < times; i++) {
    caro = caro + stringArr;

    if (typeof stringArr !== "string" || typeof times !== "number")
      return undefined;

    if (times <= 0) return "";
  }
  return caro;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["Aye", 5]), "AyeAyeAyeAyeAye");
expect(repeat(["Caroline", 1]), "Caroline");
expect(repeat(["Costa", 0]), "");
expect(repeat(["water", 3]), "waterwaterwater");
expect(repeat(["cool", -1]), "");
expect(repeat([6, 6]), undefined);
expect(repeat(["Yes", true]), undefined);

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
