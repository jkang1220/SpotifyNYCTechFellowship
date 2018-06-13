function assertion(actual, expected) {
  expected === actual
    ? console.log(`TEST PASSED: Expected ${expected} and got ${actual}`)
    : console.log(`TEST FAILED: Expected ${expected} but got ${actual}`);
}

function peek(stack) {
  if (stack.length > 0) {
    return stack[stack.length - 1];
  }
}

function decodeString(s) {
  let stack = [];
  let result = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else if (s[i] === "]") {
      let tempResult = "";
      let characters = "";
      let iterations = "";

      //build characters
      while (peek(stack) !== "[") {
        characters = stack.pop() + characters;
      }

      //drops the [ off the stack
      stack.pop();

      //build the number of iterations
      while (stack.length > 0 && /[0-9]/i.test(peek(stack))) {
        iterations = stack.pop() + iterations;
      }
      //create the result of characters * iterations
      for (var j = 0; j < iterations; j++) {
        tempResult = tempResult + characters;
      }
      //add the completed decoding back onto the stack
      stack.push(tempResult);
    }
  }
  //if there are any items left in the stack, just add them to the of the result
  while (stack.length > 0) {
    result += stack.shift();
  }
  return result;
}
//SINGLE [] TESTS
assertion(decodeString("3[a]"), "aaa");
assertion(decodeString("2[xxx]"), "xxxxxx");
assertion(decodeString("4[abz]"), "abzabzabzabz");
assertion(decodeString("10[y]"), "yyyyyyyyyy");
//NON-NESTED TESTS
assertion(decodeString("3[a]2[bc]"), "aaabcbc");
assertion(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef");
//NESTED TESTS
assertion(decodeString("3[a2[c]]"), "accaccacc");
assertion(decodeString("2[b3[a]]"), "baaabaaa");
assertion(decodeString("2[b3[a4[i]]]"), "baiiiiaiiiiaiiiibaiiiiaiiiiaiiii");
