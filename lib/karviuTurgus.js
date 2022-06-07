import {file} from './file.js';

async function skaitomKarves () {
   const readStatus = await file.read('users', 'petras.json');
console.log(readStatus); 
}

export {skaitomKarves};


