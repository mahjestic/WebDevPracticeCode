function recursiveRange(num){
   if(num === 0) return 0;
   return num + recursiveRange(num - 1);
}
recursiveRange(5);
// 5 + 4 + 3 + 2 + 1 + 0