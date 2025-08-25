import express from "express";
import bruxos from "./src/data/dados.js";
import dados from "./src/data/dados.js";

const  { varinhas, animais, pocoes} = dados;


const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("Minha API de Harry Potter está ativa!")
});



app.get("/bruxos", (req, res) =>{
    res.json(bruxos);
});

app.get("/pocoes", (req, res) => {
    if(pocoes.length>0){
        res.status(200).json(pocoes)
    } else {
        res.status(404).json("Nenhuma poção desponivel")
    }
})

app.get("/animais", (req, res) => {
    if(animais.length>0){
        res.status(200).json(animais)
    } else {
        res.status(404).json("Nenhum animal disponivel")
    }
})
app.get("/varinhas", (req, res) => {
    if(varinhas.length > 0){
        res.status(200).json(varinhas)
    } else {
        res.status(404).json("Não temos nenhuma varinha")
    }
})

app.get("/varinhas/:id", (req, res) => {
    id = parseInt(req.params.id);
    const varinha = varinhas.find(v => v.id === id);

    if(varinha){
        res.status(200).json(varinha)
    } else {
        res.status(404).json(`Nenhuma varinha com o id: ${id} foi encontrado`)
    }
})

app.get("/animais/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const anima = animais.find(a => a.id === id);

    if(anima){
        res.status(200).json(anima)
    } else {
        res.status(404).json(`Nenhum animal com o id: ${id} foi encontrado`)
    }
})

app.get("/pocoes/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const pocaoes = pocoes.find(p => p.id === id)

    if(pocaoes){
        res.status(200).json(pocaoes)
    } else {
        res.status(404).json(`Nenhuma poção com o id: ${id}`)
    }
})


app.listen(port, () => {
    console.log(`A minha API funcionando na porta ${port}`)
});