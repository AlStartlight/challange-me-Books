function margeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
// Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  // Recursively sort each half
  // and merge them back together
  // The merge function combines the two sorted halves
  // into a single sorted array
  // The merge function is called recursively
  // until the base case is reached
  // The base case is when the array has one or zero elements
  const left = margeSort(arr.slice(0, mid));
  // The slice method is used to create a new array
  // that contains the elements from the original array
  // The slice method takes two arguments
  const right = margeSort(arr.slice(mid));
// The slice method takes two arguments
  // The first argument is the starting index
  return merge(left, right);
}
function merge(left, right) {
    // Merge two sorted arrays into one sorted array
  const result = [];
  // The result array will contain the merged elements
  let i = 0;
  let j = 0;
// The i variable is used to keep track of the current index
  while (i < left.length && j < right.length) {
    // Compare the elements at the current index
    // of the left and right arrays
    // The while loop continues until one of the arrays is empty
    // The loop iterates through both arrays
    // The loop continues until one of the arrays is empty
    // The loop compares the elements at the current index
    // of the left and right arrays
    if (left[i] < right[j]) {
    // If the element in the left array is smaller
      result.push(left[i]);
    // Add it to the result array
      i++;
    } else {
    // If the element in the right array is smaller
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.time("margeSort");
console.log(margeSort([38, 27, 43, 3, 9, 82, 10])); // Example usage
// The concat method is used to combine two arrays
console.timeEnd("margeSort");