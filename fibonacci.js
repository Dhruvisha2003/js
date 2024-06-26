

const num = parseInt(prompt('Enter Number :'));


let n1 = 0 , n2 = 1 , n3;
console.log('Fibonacci Series : ');


for(let i = 1; i <= num; i++){
    console.log(n1);
    // console.log(n2);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}

