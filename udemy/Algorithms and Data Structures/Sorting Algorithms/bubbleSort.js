function bubbleSort(arr){
    const swap = (arr, index1, index2) => {
            let temp = arr[index2];
            arr[index2] = arr[index1];
            arr[index1] = temp;
    }
    for(let i = arr.length - 1; i > 0; i--){
        for(let j = 0; j <= i-1; j++){
            if (arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    }
    return arr;
}
console.log(bubbleSort([1,19,19,12,10,5,22]));
