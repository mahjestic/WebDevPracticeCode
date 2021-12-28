function averagePair(arr, average){

    let start = 0; //tracks number to average
    let end = arr.length - 1; 
    
    if(arr.length < average || arr.length === 0){
        return false;
    }
    while(start < end) {
        let tempAvg = (arr[start] + arr[end] / 2);
        if(tempAvg === average) return true;
        else if(tempAvg < average) start++;
        else end--;
    }
    return false;
}
averagePair([1,3,3,5,6,7,10,12,19], 8);