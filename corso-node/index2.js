const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('messaggio',(nome,anno)=>{
     console.log(`Ciao sono ${nome} e sono partito nell'anno ${anno}`);

})
customEmitter.on('messaggio',(nome)=>{
    console.log(nome);
})
customEmitter.on('messaggio',()=>{
    console.log('Ciao non so niente');
})

customEmitter.emit('messaggio','Alessandro',2026);
