import fs from 'fs/promises'; // promises nurodo kad mes naudosim asinchronini koduote, nes nezinosim kiek uztruks tas failo skaitymas
import { fileURLToPath } from 'url';
import path from 'path';


//console.log(fs); //galiausiai failas bus json, mes ji veliau konvertuosim
const file = {};

/**
 * 
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi failai pvz /data/users
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @returns {string} Absoliutus kelias iki failo
 */

file.fullPath = (dir, fileName) => {
    // console.log(import.meta.url); //jis nesileizdia buti printinamas, bet jei taip bnurodem tai jis nurodo kur yra failas file.js
    const __filename = fileURLToPath(import.meta.url); //atliko stansformacija is tokio slasho / i slasha i kita puse
   // console.log(__filename);

    const __dirname = path.dirname(__filename);  //cia gaunam kur yra padeda musu file.js
  //  console.log(__dirname);

    return path.join(__dirname, '../data', dir, fileName); //einam i musu direktorija kur yra file.ja, poto vienu folderiu auksciau, poto ten kur nurode user ir poto i faila

}

//async/await +//try/catch
//dokumentacija



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

file.create = async (dir, fileName, content) => {
   let fileDescriptor=null;
    try {
       const filePath=file.fullPath(dir, fileName);
      
       //1.Sukurti faila ir ji atidaryti
        const fileDescriptor= await fs.open(filePath, 'wx') ;//dar reikia nurodyti kaip atidaryti faila w reaikia sukuria faila i kuri leidziam rasyti turini, bet jei ja utoks egzistuoja tuomet x neleist mum overwrite padaryti
        console.log(fileDescriptor);
    
       //2. ideti turinu i faila, issaugoti ir uzdaryti
       await fs.writeFile(fileDescriptor, JSON.stringify(content)); //objekto neiseina ideti, reikia kad butu tekstas
      // file.Descriptor.close();
       return 'Failas sukurtas';
   } catch (error) {
       
       return 'Klaida kuriant faila';

   } finally {
    if (fileDescriptor) {
        fileDescriptor.close(); //atiduodam rakta
    }
   }
}

/**
 * Perskaitomas failo turinys (tekstinis failas).
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi failai pvz /data/users
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @returns {promise<strin|boolean} Sekmes atveju - failo turinys; Klaidos atveju -'false'
 * 
 */
file.read = async (dir, fileName) => {       //kai kazkur nadojom zodi await, butina parasyti kad f-ja yra asynch,t.y. asinchronine
    try {
        const filePath = file.fullPath(dir, fileName)  //kelias iki failo kuri reikies skaityti

      //  console.log(filePath);  //mes paprasem skaityt faila, nezinom koks failas mazas/didelis

        const fileContent = await fs.readFile(filePath, 'utf-8');   //galim paprasyti kad kai sita f-ja skaito faila kad ji papildomai suformatuot uteksta i normalu teksta, nes dabar atvaizuoja kaip per bufferi 16tainiai sistemoj
        return fileContent;
    }                                                 //del to papildem utf-8 kad jis issifruotu mum //ka igavom kritine klaida tai sitoj vietoj ir uzluzo servisas
    catch (error) {
        //  console.log("Ups,  gavom klaida",error);
        return false;
    }
}
file.update = () => {
    console.log('atnaujinamas failas...');
}
file.delete = () => {
    console.log('trinamas failas...');
}


export { file };