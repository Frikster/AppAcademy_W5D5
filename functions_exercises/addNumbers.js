const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Add a number: ", function(num) {
      let num_int = parseInt(num);
      sum += num_int;
      console.log(`You added ${num}`);
      console.log(`The sum is ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
