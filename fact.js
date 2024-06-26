//1*2*3*4......n


let num = parseInt(prompt('Enter Number :'));
if(num < 0){
    console.log('Factorial of nagetive number does not exist.');
}else if( num == 0){
    console.log(`Factorial of ${num} is 1.`);
}else{
    let Factorial = 1;
    for(let i = 1; i <= num; i++){
        Factorial = Factorial * i;
    }
    console.log(`Factorial of ${num} is ${Factorial}`);
}