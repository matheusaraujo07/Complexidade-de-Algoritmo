console.time(selectionSort);
function selectionSort(arr){
    console.log('Input: '+arr);
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex]
        arr[minIndex] = temp;
    }
    console.log('Output: '+arr);
    return arr;
}

selectionSort([1, 6, 7, 8, 10, 3, 9]);
console.timeEnd(selectionSort);

/*Este algoritmo, diferentemente do margeSort, ordena por comparação*/
