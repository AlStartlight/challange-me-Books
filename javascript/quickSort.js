function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...QuickSort(left), ...middle, ...QuickSort(right)];
}
console.time("QuickSort");
console.log(QuickSort([3, 6, 8, 10, 1, 2, 1])); // Example usage
console.timeEnd("QuickSort");