// number that can't devided by any number other then itself or 1.


let num = prompt('Enter Number : ');
num = parseInt(num);
console.log(num , typeof num);
let Isprime = true;

if(num === 1){
    console.log('Please enter number greater then one !!!!');
}

else if(num > 1){
    for(let i = 2 ; i < num ; i++){
        if(num % i == 0){
            Isprime = false;
            break;
        }
    }

    if(Isprime){
        console.log(`${num} is prime number`);
    }else{
        console.log(`${num} is not a prime number`);
    }
}