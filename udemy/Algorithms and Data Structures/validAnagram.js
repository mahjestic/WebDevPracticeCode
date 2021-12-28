function validAnagram(str1, str2){
    //frequency object for str1
    let frequency1 = {};
    //frequency object for str2
    let frequency2 = {};
        
    //if str1 != str2 return false
    if(str1.length !== str2.length){
        console.log("false");
        return false;
    }
    //loop over first string and add them into frequency object
    for(let char of str1){
        frequency1[char] = (frequency1[char] || 0) + 1;

    }

    //loop over both frequencies
    for(let i = 0; i < str2.length; i++){
        let char = str2[i];
        if(!frequency1[char]){
            console.log("false");
            return false;
        }else{
            frequency1[char] -= 1;
        }
    }
        console.log("true");
        return true;
    }
    validAnagram("cat","tac");

