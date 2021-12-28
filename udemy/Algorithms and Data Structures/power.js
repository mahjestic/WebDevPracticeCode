function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base,exp - 1);
}
power(2,3);

//2 * 2 * 2

//power(2,3)
    //2 * power(2,2)
        //2 * power(2,1)
            //2 * power(2, 0)
            //2 * 1 = 2
        //2 * 2 = 4
    //2 * 4 = 8
//return 8;