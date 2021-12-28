function areThereDuplicates(){

    let freq = {};
    
    for(let key in arguments){
        freq[arguments[key]] = (freq[arguments[key]] || 0) + 1;
    }

    for(let val in freq){
        if(freq[val] > 1) return true;
    }
    return false;
}

let arg = ['a','b','c'];

console.log(areThereDuplicates(arg));