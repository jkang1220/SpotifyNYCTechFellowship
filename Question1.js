// Question 1 -- sortByStrings(s, t): Sort the letters in the string s
// by the order they occur in the string t.You can assume t will not have
// repetitive characters.For s = "weather" and t = "therapyw", the output
// should be sortByString(s, t) = "theeraw".For s = "good" and t = "odg",
// the output should be sortByString(s, t) = "oodg".

function assertion(actual, expected) {
  expected === actual
    ? console.log(`TEST PASSED: Expected ${expected} and got ${actual}`)
    : console.log(`TEST FAILED: Expected ${expected} but got ${actual}`);
}

function sortByStrings(s, t) {
  //Created an object to store indexes to get constant time access
  let tIdx = {};
  for (let i = 0; i < t.length; i++) {
    tIdx[t[i]] = i;
  }
  return s
    .split("")
    .sort((a, b) => tIdx[a] - tIdx[b])
    .join("");
}

//TESTS:
assertion(sortByStrings("weather", "therapyw"), "theeraw");
assertion(sortByStrings("good", "odg"), "oodg");
assertion(
  sortByStrings("washingtondc", "abcdefghijklmnopqrstuvwxyz"),
  "acdghinnostw"
);
assertion(
  sortByStrings("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"),
  "abcdefghijklmnopqrstuvwxyz"
);
assertion(sortByStrings("friendpihs", "ship"), "friendship");
