let n=parseInt(process.argv[2]);
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

/* Using while loop */

let i=1;
while(i<=n){
    if(i%2==0){
        console.log(i);
        i++;
    }
}
