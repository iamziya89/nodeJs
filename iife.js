
let sum=0;
let ans=(function sumOfDigit(num){
while(num !=0){
    let rem=num%10;
    sum=sum+rem**2;
    num=Math.floor(num/10)
}
return sum;
})(49);
console.log(ans)
