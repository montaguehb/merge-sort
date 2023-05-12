function merge(arr1, arr2) {
  // type your code here
  const newArr = []
  while(arr1.length > 0 && arr2.length > 0) {
    newArr.push((arr1[0] < arr2[0] ? arr1:arr2).splice(0 , 1)[0])
  }
  newArr.push(...(arr1.length < arr2.length ? arr2:arr1))
  return newArr
}

function mergeSort(arr) {
  // type your code here
  if(arr.length <= 1) {
    return arr
  }
  const middleIndex = Math.min(arr.length/2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex, arr.length);
  return merge(mergeSort(left), mergeSort(right))
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));

}

module.exports = mergeSort;

// Please add your pseudocode to this file
//Divide an array into sub-arrays until the sub array has a length of 1 at which point the function should return
//Create a variable that splits the array at a middle point so that the left and right arrays have equal lengths +- 1
//divide and merge the sub array's
//merge should take in 2 sorted arrays of equal length and return a new array that has the length of arr1.length + arr2.length
//check each value at position 0 of both arrays and put the smallest into the new array
//once an array has a length of 0, put the values of the remaining array at the end of the new array

// And a written explanation of your solution
