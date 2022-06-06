//async/await +//try/catch
//dokumentacija


const file = {}
//darom templatus crudams

//dir - folderis, kur bus failas
//fileName - pavadinimas.jpg su failo pletiniu
//content - turinys, kuri reikia irasyti i kuriama faila


//cia yra pradzia i f-ju dokumentacija. Kodo dokumentavimas yra konkreciai ir aiskiai paaiskint ika daro f-ja,
//kokiu reikia parametru ir ka sita f-ja grazins.
//pvz


/**
 * Sukuriamas failas, jei tokio dar nera nurodytojo direktorijoje.
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi failai pvz /data/users
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @param {*} content  Objektas (pvz. {...} kuri nirima irasyti i faila)
* @returns {boolean|string} Sekmes atveju - `true`; Klaidos atveju -klaidos pranesimas 
*/

file.create = (dir, fileName, content) => {
    console.log('kuriamas failas...');
}

file.read = () => {
    console.log('skaitomas failas...');
}
file.update = () => {
    console.log('atnaujinamas failas...');
}
file.delete = () => {
    console.log('trinamas failas...');
}


export { file };