const express = require('express')

const app = express()
const { persone } = require('./persone');  // <--- CORRETTO

app.get('/',(req,res)=>{
    res.send("<h1>Homepage</h1><a href='/persone'>Vai a persone</a>")
})

app.get('/persone', (req,res)=>{
    const nuovaPersona = persone.map((persona)=>{
        const {nome,cognome,eta} = persona
        return {nome,cognome,eta}
    })
    res.json(nuovaPersona)
})

app.get('/persone/:id', (req, res) => {
    const { id } = req.params;
    const persona = persone.find((persona) => persona.id === id);
    if (!persona){
        return res.status(404).send("Pagina non trovata")
    }
    res.json(persona);
});

app.listen(3000)
