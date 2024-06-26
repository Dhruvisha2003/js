// x = Math.floor(Math.random() * 100) + 1;
// y = Math.floor(Math.random() * 50) + 1;

// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// const difference = x - y;
// const differenceOutput = `${x} - ${y} = ${difference}`;
// console.log(differenceOutput);

// const product = x * y;
// const productOutput = `${x} * ${y} = ${product}`;
// console.log(productOutput);

// const quotiant = x / y;
// const quotiantOutput = `${x} / ${y} = ${quotiant}`;
// console.log(quotiantOutput);

// const rem = x % y;
// const remOutput = `${x} % ${y} = ${rem}`;
// console.log(remOutput);


// let x;

// const num = [1,2,3,4,5];
// num.reverse();
// num.unshift(6); 
// num.push(0);

// console.log(num);



// const arr1 = [1,2,3,4,5];
// const arr2 = [5,6,7,8,9,10];
// arr2.shift();
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);


// let x;
// const ob = {
//     name: 'Dhruvisha',
//     Surname : 'Vekariya',
//     Age : 20,
//     addres: {
//         Area : 'Mota varachha',
//         city: 'surat',
//         state: 'gujarat'
//     },
//     language: ['gujrati','english','hindi'],
// };
// delete ob.Surname;
// ob.student = function(){
//     console.log('i am a student');
// }
// ob.student();
// console.log(ob);


// const getCelsius = (f) => 
//     {
//         return (f-32)*5/9;
//     };

// let ans = getCelsius(32);
// console.log('The temprature is',ans ,'celcius');

// getCelsius();
// function getCelsius() {
//     let f = prompt('Enter Fahrenhait : ');
//     let ans = (f-32)*5/9;
//     let x = Math.round(ans);
//     if(f != null){
//         console.log('The temprature is', x ,'celcius');
//     }
// }


// const minmax = (array) => {
//     const min = Math.min(...array);
//     const max = Math.max(...array);

//     return {min , max};
// }

// console.log(minmax([22,4,1,34,65,68]));


// (function (length , width) {
//     const length = prompt('Enter length of Rectengle : ', 0);
//     const width = prompt('Enter Width of Rectangle : ', 0);
//     let ans = width * length;
//     console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${ans}`);
// })



// for (let i = 0; i <= 100; i++) {
//     if (i % 15 == 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else if (i % 5 == 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


// const people = [
//     {
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john@gmail.com',
//       phone: '111-111-1111',
//       age: 30,
//     },
//     {
//       firstName: 'Jane',
//       lastName: 'Poe',
//       email: 'jane@gmail.com',
//       phone: '222-222-2222',
//       age: 25,
//     },
//     {
//       firstName: 'Bob',
//       lastName: 'Foe',
//       email: 'bob@gmail.com',
//       phone: '333-333-3333',
//       age: 45,
//     },
//     {
//       firstName: 'Sara',
//       lastName: 'Soe',
//       email: 'Sara@gmail.com',
//       phone: '444-444-4444',
//       age: 19,
//     },
//     {
//       firstName: 'Jose',
//       lastName: 'Koe',
//       email: 'jose@gmail.com',
//       phone: '555-555-5555',
//       age: 23,
//     },
//   ];
// let youngPeople = [];
// youngPeople = people.filter((Ispeople) => Ispeople.age <=25).map((Ispeople) => ({name : Ispeople.firstName + ' ' + Ispeople.lastName , email : Ispeople.email,}));
// console.log(youngPeople);


// const numbers = [2, -30, 50, 20, -12, -9, 7];
// let nums = [];
// nums = numbers.filter((Isnum) => Isnum > 0);

// let positivenums = 0;
// for(let i = 0 ; i < nums.length ; i++){
//     positivenums += nums[i] 
// } 
// console.log(positivenums);



// const words = ['coder', 'programmer', 'developer'];

// const cWords = words.map((word) => {
//   return word[0].toUpperCase() + word.slice(1, word.length);
// });

// console.log(cWords);

// let x = 10;
// let y = 20;
// let z = "30";

// let sum = console.log(x+y+z);

let x;
const num = new Number(523454);
x = num.toPrecision(5);
console.log(x);