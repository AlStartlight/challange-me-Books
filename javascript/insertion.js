function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Current element to be positioned
        let key = arr[i];
        // Index of the previous element
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            // Shift the element to the right
            // to make space for the key
            arr[j + 1] = arr[j];
            // Move to the previous element
            j = j - 1;
        }
        // Place the key in its correct position
        arr[j + 1] = key;
    }
    // Return the sorted array
    // after the loop ends
    // The array is sorted in ascending order
    // by the end of the loop
    // The function modifies the original array
    return arr;
}

console.time("insertionSort");
console.log(insertionSort([12, 11, 13, 5, 6])); // Example usage
console.timeEnd("insertionSort");