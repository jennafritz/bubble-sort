function bubbleSort(arr) {
  
  let swaps = 0

  arr.forEach((element, index) => {
    if(element > arr[index + 1]){
      [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
      swaps += 1
    }
  })

  if(swaps === 0){
    return arr
  } else {
    return bubbleSort(arr)
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("Expecting: [-1, 5, 7, 12]");
  console.log("=>", bubbleSort([7, 12, -1, 5]));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("Expecting: [10, 20, 30 70]");
  console.log("=>", bubbleSort([20, 70, 30, 10]));

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("Expecting: [-82, -47, 13, 109]");
  console.log("=>", bubbleSort([-47, 109, -82, 13]));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
