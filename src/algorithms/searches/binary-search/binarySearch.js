
function binarySearch(sortedArr, item) {
    let start = 0;
    let end = sortedArr.length - 1;

    while (start <= end) {
        // find the middle index
        let mid = Math.floor((start + end) / 2);

        if (sortedArr[mid] === item) {
            return mid;
        } else if (sortedArr[mid] < item) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    // not found
    return -1;
}