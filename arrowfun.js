console.log(sumOfDigit(4434))
console.log(sumOfDigit(443))
let sum=0;
let sumOfDigit=(num)=>{
while(num !=0){
    let rem=num%10;
    sum=sum+rem**2;
    num=Math.floor(num/10)
}
return sum;
}
