/* Modulo HTTP*/
/*const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url=== "/"){

        res.end("Benvenuto sul mio sito");
    }
    if(req.url === "/alessandro"){

        res.end("il profilo di alessandro");
    }
    res.end("Ciao")
})
server.listen(3000);*/
const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Benvenuto sul mio sito");
        return;
    }

    if (req.url === "/alessandro") {
        res.end("il profilo di alessandro");
        return;
    }

    res.end("Ciao");
})

server.listen(3000);

