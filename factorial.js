let n=parseInt(process.argv[2]);
let fact=1;
/*
for(let i=1; i<=n;i++){
    fact=fact*i;
}
console.log(fact);
*/

let i=1;
while(i<=n){
    fact=fact*i;
    i++;
}
console.log(fact);