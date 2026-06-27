// modulo fs file system
const{readFileSync,writeFileSync} = require('fs')
const prova = readFileSync('./cartella/prova.txt','utf8');
const ciao = readFileSync('./cartella/ciao.txt','utf8');

console.log(ciao)
console.log(prova)

writeFileSync('./cartella/prova.txt',' abito in via enrico mazzoccolo',{flag: 'a'})//inserendo uno scritto quest'ultimo va a sovrascrivere su quello vecchio
// inserendo il flag a append possiamo scrivere il file senza sovrascrivere il file vecchio


