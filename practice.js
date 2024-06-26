// function registeruser(user = 'bot'){
//   return `${user} is register`;
// }
// console.log(registeruser());

// sum (1,2,3,4,5,6,7);

// function sum(...numbers){
//     let total = 0;
//     for(const num of numbers){
//       total += num;
//     }
//     console.log('Total is',total);
// }



// function loginuser(userdata) {
//   return `hello ${userdata.name} Your id is ${userdata.id} `;
// }
// userdata = 
//   {
//     id : 3424,
//     name: 'Dhruvisha',
//     age: 20,
//   }
// console.log(loginuser(userdata));


// function getRandom(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   const item = arr[randomIndex];
//   console.log(item);
// }
// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// function addDollarSign(value) {
//     return '$' + value;
//   }
  
//   console.log(addDollarSign(100));

//   function first() {
//     const x = 100;
  
//     function second() {
//       const y = 200;
//       console.log(x + y);
//     }
  
//     // console.log(y);
  
//     second();
//   }
  
//   first();

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  };
  
  // Convert to JSON string
  const str = JSON.stringify(post);
  
  console.log(str.id);