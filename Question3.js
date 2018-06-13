// Question 3 -- changePossibilities(amount,amount): Your quirky boss
//  collects rare, old coins. They found out you're a programmer and
//  asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array
//  of coin denominations, computes the number of ways to make the
//  amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
//  your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function assertion(actual, expected) {
  expected === actual
    ? console.log(`TEST PASSED: Expected ${expected} and got ${actual}`)
    : console.log(`TEST FAILED: Expected ${expected} but got ${actual}`);
}

function changePossibilities(amount, denominationsArr) {
  var combinationCount = 0;
  if (denominationsArr.length === 0) {
    return "Please enter coin(change) options.";
  }

  const recurse = (sum, index) => {
    if (sum === amount) {
      combinationCount++;
    } else if (sum < amount) {
      for (var i = index; i < denominationsArr.length; i++) {
        if (sum + denominationsArr[i] <= amount) {
          recurse(sum + denominationsArr[i], i);
        }
      }
    }
  };

  recurse(0, 0);
  return combinationCount;
}

// TESTS:
assertion(changePossibilities(5, [1, 2, 3]), 5);
assertion(changePossibilities(4, [1, 2, 3]), 4);
assertion(changePossibilities(17, [1, 2, 5, 10, 20, 50, 100, 200]), 28);
assertion(changePossibilities(100, [1, 5, 10, 25, 50, 100]), 293);
assertion(changePossibilities(5, [1]), 1);
assertion(changePossibilities(5, [10]), 0);
assertion(changePossibilities(5, []), "Please enter coin(change) options.");
