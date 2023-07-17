
// function sync() {
//     console.log('first');

// }
// sync();

// console.log('second');



// setTimeout(function() {
//     console.log('third');
// },3000)

// function sync() {
//     console.log('first');

//  }
//  sync();

//  console.log('second');




// let meraPromise = new Promise(function(resolve,reject){
//     console.log('I am inside promise');
//     resolve(1998);
// }) 

// console.log('Pehla');

// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise');
//     }, 5000);
//     // resolve(2223);
//     reject(new Error('Error aaya hai'))
// }) 

// console.log('Pehla');


// let meraPromise1 = new Promise(function(resolve,reject){
//      setTimeout(function(){
//          console.log('I am inside Promise1');
//      }, 5000);
//     //resolve(222323432);
//      reject(new Error('Error aaya hai'))
//  });

//  meraPromise1.then((value) => {console.log(value)},(error) => {console.log("Recivied an Error")});

//  meraPromise1.catch((error) => {console.log("Recivied an Error")});

// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise2');
//     }, 5000);
//     // resolve(2223);
//     // reject(new Error('Error aaya hai'))
// });

// console.log('Pehla');


// let waadaa1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('settimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             console.log('settimeout2 started');
//         },3000);
//         resolve("waada 2 resolve");
//     })
//     return waadaa2;
// })

// output.then((value) => console.log(value));



//  async function abcd() {
//     return 7;
// }
// abcd();


// async function utility() {

//     let delhiMausam  = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("maharashtra me bhot garmi hai");
    
//         },10000);
//     });
    
//     let hydMausam  = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hydrabad is cool hai");
//         },20000);
//     });
    
//     let dM = await delhiMausam;
//     let hM = await hydMausam;
    
//     return [dM,hM];

// }

// async function utility() {
//     let content =await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);

// }
// utility();

async function helper() {
    let options = { 
        method: 'POST',
        body: JSON.stringify({
          title: 'Harshal',
          body: 'stronge',
          userId: 2002,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    }
    let Content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
    let respose = Content.json();
    return respose;
}

async function utility() {
    let ans =await helper();
    console.log(ans);
}

utility();



   


