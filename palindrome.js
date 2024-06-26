

// 12321  ===> 12321

let num = prompt('Enter Number');
num = Number(num);
let rev = 0, rem = 0;
let number = num;

while (num != 0) {
    rem = num % 10;
    rem = parseInt(rem);
    // console.log(rem);
    rev = rev * 10 + rem; 
    rev = parseInt(rev);
    num = num/10;
    num = parseInt(num);
}
console.log(rev);

if(rev == number){
    console.log(`${number} is a Palindrome`);
}else{
    console.log(`${number} is a not Palindrome`);
}
