// modulo fs file system
//const{readFileSync,writeFileSync} = require('fs')
//const prova = readFile('./cartella/prova.txt','utf8');
/* const ciao = readFileSync('./cartella/ciao.txt','utf8');

console.log(ciao)
console.log(prova)

writeFileSync('./cartella/prova.txt',' abito in via enrico mazzoccolo',{flag: 'a'})//inserendo uno scritto quest'ultimo va a sovrascrivere su quello vecchio


writeFileSync('./cartella/alessandro.txt','Ciao da Alessandro');//per creare una nuova cartella 

 */
const{readFile,writeFile} = require('fs')
readFile('./cartella/prova.txt','utf8',(error,result)=>{
    if(error){
        console.log("errore");
        return
    }
    console.log(result)
})