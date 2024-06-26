

let num = prompt('Enter Number :');
num = parseInt(num);
let Isoddeven = false;

    if(num % 2 == 0){
        Isoddeven = true;
    }

    if(Isoddeven){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }