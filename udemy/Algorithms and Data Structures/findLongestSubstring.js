function findLongestSubstring(str){
    let start = 0;
    let end = 1;
    let result = {};
    let length = Object.keys(result).length;
    
    if(str.length === 0) return 0;
  
    while(start < str.length){
        if(end === str.length){
            length = Math.max(length, end-start);
            break;
        }else if(result[str[end]] && end < str.length){
            length = Math.max(length, end-start);
            start++;
            end = start + 1;
            result = {};
            result[str[start]] = (result[str[start]] || 0) + 1;
        }else if(!result[str[end]]){
           result[str[end]] = (result[str[end]] || 0) + 1;
           end++;
        }
    }
    return length;
}
findLongestSubstring("abcded"); //5