let num = parseInt(prompt("Add number"));
function palindrome(num) {
  let steps = 0;
  while (true) {
    steps++;
    let reversedNum = parseInt(num.toString().split("").reverse().join(""));
    let sum = num + reversedNum;
    if (sum === parseInt(sum.toString().split("").reverse().join(""))) {
      return { result: sum, steps };
    }
    num = sum;
  }
}

console.log(palindrome(num));
