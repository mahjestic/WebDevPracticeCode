function linearSearch(arr, target){
    for(let index = 0; index < arr.length; index++){
		if(arr[index] === target) return index; 
	}
    return -1; 
}
console.log(linearSearch([2,3,4,5,6], 8));