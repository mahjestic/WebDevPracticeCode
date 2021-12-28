function findLongestSubstring(str) {
    let length = 0;
    let result = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (result[char]) {
        start = Math.max(start, result[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      length = Math.max(length, i - start + 1);
      // store the index of the next char so as to not double count
      result[char] = i + 1;
    }
    return length;
}
findLongestSubstring("longestsubstring")