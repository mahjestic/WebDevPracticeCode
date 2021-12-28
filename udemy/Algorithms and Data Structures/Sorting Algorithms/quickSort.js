function quickSort(arr){
   if(arr.length <= 1) return arr; //base case

   let pivot = arr[0];
   let left = [];
   let right = [];

    //sorting elements into left and right subarrays with the pivot
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= pivot) left.push(arr[i]);
        else if(arr[i] > pivot) right.push(arr[i]);
    }
    //quicksort subarrays
    left = quickSort(left);
    right = quickSort(right);

    let result = left.concat(pivot).concat(right);
    return result;
}
console.log(quickSort([4,4,9,1,9,5,3]));