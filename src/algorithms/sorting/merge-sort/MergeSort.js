
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    // Split arr into right and left
    const len = arr.length;
    const middle = Math.floor(len / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge (
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const res = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++;
        } else {
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}