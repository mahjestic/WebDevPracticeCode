function countUniqueValues(arr){
    let left = 0; // tracks unique values
    let right = 1; //traverses through array
    if(arr.length === 0){
        return 0;
    }
    while(right < arr.length){
        if(arr[left] !== arr[right]){
            left++;
            arr[left] = arr[right];
        }else{
            right++;
        }
    }        
    left++; 
    return left;
}                  
let arr = [1,1,2,4,6,8,8,9];
                   
countUniqueValues(arr);

