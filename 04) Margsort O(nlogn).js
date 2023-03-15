console.time(mergeSort);
function mergeSort(array, half = array.length/2){
    if(array.length < 2){
        return array
    }

    const left = array.splice(0, half);

    return merger(mergeSort(left), mergeSort(array))
}
console.timeEnd(mergeSort);

function merger(left, right){
    const arr = [];

    while(left.length && right.lenght){
        if(left[0] < right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    return[...arr, ...left, ...right];

}


console.log(mergeSort([10, 2, 3, 5, 6, 15, 9, 8, 1, 7]));





