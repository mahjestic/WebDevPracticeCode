function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        let middle = Math.floor((right + left + 1) / 2);   
        if(arr[middle] === target) return middle;
        else if(target < arr[middle]) right = middle - 1;
        else if(target > arr[middle]) left = middle + 1;
    }
    return -1;
}                         
console.log(binarySearch([2,4,6,8,10], 11));
                               