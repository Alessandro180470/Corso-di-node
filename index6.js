const express = require('express')

const app = express()
const { persone } = require('./persone'); 
const {automobili} = require('./automobili') 
app.get('/',(req,res)=>{
    res.send("<h1>HomepagePersone</h1><a href='/persone'>Vai a persone</a><br><h1>HomepageAutomobili</h1><a href='/automobili'>Vai a automobili</a>")
   
})




app.get('/persone',(req,res)=>{

    const nuovePersone = persone.map((persona)=>{
        const {nome, cognome, eta} = persona
        return {nome, cognome, eta}

    })
    res.json(nuovePersone)

    })
    
    app.get('/persone/:id',(req,res)=>{
    console.log(req.params)
    const { id } = req.params
    const persona = persone.find((persona)=> persona.id === id)
    if (!persona){
        return res.status(404).send("<h1>Persona non trovata</h1>")

        
    }
    res.json(persona)
})
    app.get('/automobili',(req,res)=>{

    const nuoveAuto = automobili.map((auto)=>{
        const {nome, tipo, cilindrata} = auto
        return {nome, tipo, cilindrata}

    })
    res.json(nuoveAuto)

    })

app.listen(3000)
