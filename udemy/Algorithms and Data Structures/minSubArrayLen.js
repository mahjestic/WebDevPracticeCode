function minSubArrayLen(arr, target){
    let sum = 0;
    let start = 0;
    let end = 0;
    let length = Infinity;

    while(start < arr.length){
        if(sum < target && end < arr.length){
            sum += arr[end];
            end++;
        }else if(sum >= target){
            length = Math.min(length, end-start);
            sum -= arr[start];
            start++;
        }else{
            break;
        }
    }
    return length === Infinity ? 0 : length;
}
minSubArrayLen([2,3,1,2,4,3], 7);