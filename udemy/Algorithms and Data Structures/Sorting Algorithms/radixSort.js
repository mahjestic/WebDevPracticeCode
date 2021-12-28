const getDigit = (num, index) => ~~(Math.abs(num) / (10 ** index)) % 10;

const countDigits = num => num.toString().length;

const maxDigits = arr => countDigits(Math.max(...arr));

function radixSort(nums){
    var mostDigits = maxDigits(nums);
    
    for(let k = 0; k < mostDigits; k++){
        let bucket = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            bucket[digit].push(nums[i]);
        }
        nums = [].concat(...bucket);
    }
    return nums;
}
radixSort([302,10,4235, 21, 4, 520, 2349]);