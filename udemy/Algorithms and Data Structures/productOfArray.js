function productOfArray(arr){
    let result = 1;

    function multiplier(arr){
        if(arr.length === 0) return 1;
        result = result * arr[0];
        multiplier(arr.slice(1));
    }
    multiplier(arr)
    return result;
}
console.log(productOfArray([10,10,2]));
//2*2*3 = 12
// 2 * productOfArray(arr.slice(1))
    // 2 * productOfArray(arr.slice(1))
        // 3 * productOfArray(arr.slice(1))
        // 3 * 
