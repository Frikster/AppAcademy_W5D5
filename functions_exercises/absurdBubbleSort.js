const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1,el2,callback) {
  reader.question(`Is ${el1} > ${el2}?`, function (response) {
    if (response === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSort(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      console.log(arr.toString());
      if(isGreaterThan){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        console.log(arr.toString());
        madeAnySwaps = true;
      }
      innerBubbleSort(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if(madeAnySwaps){
      innerBubbleSort(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// askIfGreaterThan(1,2,function(res){
//   if(res){
//     console.log("yes");
//     reader.close();
//   }
//     else {
//       console.log("no");
//       reader.close();
//     }});

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
