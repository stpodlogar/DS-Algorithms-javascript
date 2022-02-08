
function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        // Set current index as min
        let min = i;
        let tmp = arr[i];
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                // Update min if current is lower than previous
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = tmp;
    }
    return arr;
}