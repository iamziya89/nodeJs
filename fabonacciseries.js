let n=parseInt(process.argv[2])
let a=1;
let b=1;
for(let i=1;i<=n;i++){
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
}