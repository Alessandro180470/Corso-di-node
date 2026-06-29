const express = require ('express')
const app = express()
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.get('/Contatti',(req,res)=>{
    res.send('<h1>Contatti</h1>')
})

app.use((req, res) => {
    res.status(404).send('<h1>Risorsa non trovato hai inserito un valore ERRATO</h1>');
});

app.listen(3000)