function sameFrequency(num1, num2){

let num1Length = Math.ceil(Math.log10(num1 + 1));
let num2Length = Math.ceil(Math.log10(num2 + 1));

    if(num1Length !== num2Length){
        return false;
    }

    let freq1 = {};

    for(let i = num1Length; i > 0; i--){
        let digit1 = Math.floor(num1 % 10);
        freq1[digit1] = (freq1[digit1] || 0) + 1;
        num1 = num1 / 10;
    }

    for(let digits = 0; digits < num2Length; digits++){
        let digit2 = Math.floor(num2 % 10);
        num2 = num2 / 10;
        if(!freq1[digit2]){
            return false;
        }else{
            freq1[digit2] -= 1;
        }
    }
    return true;
}

sameFrequency(123,321);