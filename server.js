const express = require("express");
const pokemonData = require("./database.json")
const strangerData = require("./strangerDB.json")
const PORT = 5000;
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api',(req, res)=>{    
    res.send("Hello")
});

app.get('/api/all-pokemons',(req, res)=>{   
    // query database
    // process return data
    // format the data
    // return the data 
    res.send(JSON.stringify(pokemonData))
});
app.get("/posts",(req,res)=>{
    console.log(strangerData)
    res.send(JSON.stringify(strangerData))
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} successfully`)
})
