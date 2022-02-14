
function linearSearch(arr, item) {
    // Loop through elemnts in array to look for item
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    // Item not found in the array
    return null;
}