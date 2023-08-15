const express = require("express");
const pokemonData = require("./database.json")
const PORT = 5000;
const app = express();

app.get('/',(req, res)=>{
    console.log(pokemonData)
    res.send("Hello")
});

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} successfully`)
})
