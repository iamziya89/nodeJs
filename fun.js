
let sum=0;
function sumOfDigit(num){
while(num !=0){
    let rem=num%10;
    sum=sum+rem**2;
    num=Math.floor(num/10)
}
return sum;
}
console.log(sumOfDigit(4434))