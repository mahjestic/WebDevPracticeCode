function maxSubarraySum(arr, length){
    let maxSum = 0;
    if(arr.length < length) return null;
    for(let i = 0; i < length; i++){
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for(let i = length; i < arr.length; i++){
        tempSum -= arr[i - length];
        tempSum += arr[i];
        if(tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}
maxSubarraySum([100,200,300,400], 2);