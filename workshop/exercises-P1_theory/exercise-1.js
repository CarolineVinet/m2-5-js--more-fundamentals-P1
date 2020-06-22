// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(""); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));
/* 3 is run as an argument of the decrement function which returns 2.
 2 is then run as an argument of the square function which returns 4.
 4 is run as an argument in the decrement function which returns 3.
 3 is finally run as an argument of the square function which returns 9.*/

// 1-2
decrement(decrement(square(square(3))));
/* 3 is run as an argument of the square function whcih returns 9.
9 is then also run through the square function as an argument which returns 81.
81 is run as an argument of the decrement function and returns 80.
80 is finally run as an argument of the decrement function aswell, returning 79.*/

// 1-3
duplicateString(reverseString("hello"));
/* the string "hello" is passed through the reverseString function which, using the split array method, splits the string into an array of sub strings (each letter becomes a string in an array).
The reverse method then reverses the order of the new strings in the array (o,l,l,e,h).
The join method is then used to convert the new array back to a string which renders olleh.
the string is then duplicated when passed through the duplicateString function, returning olleholleh.
*/

// 1-4
console.log(reverseString(duplicateString(duplicateString("foo"))));
 /*the string "foo" is passed throught the duplicateString function as an argument which returns a new array with the value of foo foo.
 foo foo is then also passed as an argument of the duplicateString fucntion ans returns foo foo foo foo.
 foo foo foo foo is then passed through the reverseString function which, following the steps outlines in 1-3 will return the string "oofoofoofoof".