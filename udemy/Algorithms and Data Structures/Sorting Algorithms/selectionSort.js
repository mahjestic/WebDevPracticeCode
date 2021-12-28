function selectionSort(arr){
    const swap = (arr, index1, min) => {
        let temp = arr[index1];
        arr[index1] = arr[min];
        arr[min] = temp;
    }
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j;
        }
        if(arr[min] !== arr[i]) swap(arr, i, min);
    }
    return arr;
}
console.log(selectionSort([2,41,23,19,0]));