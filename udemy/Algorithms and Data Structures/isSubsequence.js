function isSubsequence(str1, str2){   
    let p1 = 0;
    
    if(str2.length < str1.length) return false;

    for (const p2 of str2) {
        if(p1 === str1.length - 1 && str1[p1] === p2) return true;
        else if(str1[p1] === p2){
            p1++;  
        }
    }
    return false;
}
isSubsequence("abc","abracadabra");





