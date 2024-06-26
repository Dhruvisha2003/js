// 153 == 1*1*1 + 5*5*5 + 3*3*3


let number = prompt('Enter Number : ');
number = parseInt(number);
let temp = number;
let sum = 0,rem;

while(temp > 0){
    rem = temp % 10;
    sum += rem * rem * rem;
    temp = parseInt(temp / 10);
}

if(sum == number){
    console.log(`${number} is armstrong`);
}else{
    console.log(`${number} is not armstrong`);
}


