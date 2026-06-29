const express = require ('express')

const path = require('path');

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('homepage.html',{root: __dirname + "/public"})
})

app.get('/about',(req,res)=>{
    res.sendFile('about.html',{root: __dirname + "/public"})
})

app.get('/Contatti',(req,res)=>{
    res.sendFile('contatti.html',{root: __dirname + "/public"})
})

app.use((req, res) => {
   res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));

});

app.listen(3000)