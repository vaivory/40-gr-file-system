import { file } from './lib/file.js'
console.log(file);


//kaip reiketu nurodyti kelia kur pakursim faila?
//file.create('data/users', 'petras.json', {name: 'Petras', age: 99});

//file.create('data/luckyNumbers', 'game.txt', '1, 2, 3');


const user = {
    name: 'Petras',
    age: 99,
    isLoggedIn: false,
}

//objektas yra ne json,o mes ji norim ten irasyti, tai siuo atveju nesutampa formatai
file.create('users', 'petras.json', user);

