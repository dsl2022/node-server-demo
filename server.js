const express = require("express");
const pokemonData = require("./database.json")
const PORT = 5000;
const app = express();

app.get('/',(req, res)=>{    
    res.send("Hello")
});

app.get('/all-pokemons',(req, res)=>{    
    res.send(JSON.stringify(pokemonData))
});

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} successfully`)
})
