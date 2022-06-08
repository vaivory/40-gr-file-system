import { file } from './lib/file.js'
//console.log(file);

import { skaitomKarves } from './lib/karviuTurgus.js';

const karves = await skaitomKarves();
//console.log(karves);

//kaip reiketu nurodyti kelia kur pakursim faila?
//file.create('data/users', 'petras.json', {name: 'Petras', age: 99});

//file.create('data/luckyNumbers', 'game.txt', '1, 2, 3');


//const user = {
//    name: 'Petras',
//    age: 99,
//    isLoggedIn: false,
//}

//objektas yra ne json,o mes ji norim ten irasyti, tai siuo atveju nesutampa formatai
//const status = file.create('users', 'petras.json', user);

//*******************************************
//const apiStatus = await fetch('');
//if (apiStatus) {
//
//}
//*******************************************
//  const readStatus=await file.read('users', 'petras.json');
// console.log('readstatus',readStatus);

// const readStatus2=await file.read('users', 'maryte.json');  //jei failo nera tai gaunam kritine klaida ir musu programa issijunge
// //if (readStatus2) {
// //    console.log('OK');
// //} else {
//  //   console.log('Ups...');
// //}
// console.log('readstatus',readStatus2);

// const readStatus3=await file.read('user', 'petras.json');
// console.log('readstatus',readStatus3);

// const readStatus4=await file.read('user');
// console.log('readstatus',readStatus4);

// const readStatus5=await file.read();
// console.log('readstatus',readStatus5);

// const readStatus5=await file.read('users/', 'petras.json');
// console.log('readstatus',readStatus5);

// const readStatus4=await file.read('/users/', 'petras.json');
// console.log('readstatus',readStatus4);

const userMaryte = {
    name: 'Maryte',
    age: 87,
    isMaried: false,
}

const createStatus = await file.create('users', 'maryte.json', userMaryte);

console.log('File status', createStatus);

const naujasFailas = {
    name: 'vartotojas',
    year: 232,
    citi: 'Vilnius',
}

// const createStatus2= await file.create('','vartotojas.json', naujasFailas);

// const batas={
//     color: 'red',
//     size: 38,
// }
//const createStatus3= await file.create('shoes','batai.json', batas); //kolkas reikia paciam sukurti folderi, galvosim kaip automatizuoti

const createStatus4 = await file.create('users', 'betkas.json', userMaryte);
console.log(createStatus4);