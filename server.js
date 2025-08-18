import express from "express";
import bruxos from "./src/data/bruxos.js";


const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("Minha API de Harry Potter está ativa!")
});



app.get("/bruxos", (req, res) =>{
    res.json(bruxos);
});

app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bruxo = bruxos.find(b => b.id === id);


    //caso encontre, exibir por meio desse comando
    if(bruxo){
        res.json({
            sucess: true,
            messsage: `Bruxp ${bruxo.nome} encontrado! 👌`,
            data: bruxo
        })
    }else {
         //Caso não ache o bruxo exibir o erro 404
         res.status(404).json({
            sucess: false,
            error: "Bruxo não encontrado",
            message: `Nenhum com o ID ${id} foi encontrado`,
            codigo: "WIZARD_NOT_FOUND"
            
         });
    }
});

app.get("/bruxos/nome/:nome", (req,res) => {
    const nome = req.params.nome.toLowerCase();

    const bruxosEcontrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

    if(bruxosEcontrados.length>0){
            res.status(200).json(bruxosEcontrados)
    } else {
        res.status(404).json({
            mensagem: "Bruxo não encontrado"
        })
    }
});


app.get("/bruxos/casa/:casa", (req, res) => {
    let casa = req.params.casa;

    const BruxosDaCasa = bruxos.filter(b => b.casa.toLowerCase().includes(casa));

    if(BruxosDaCasa.length>0){
        res.status(200).json(BruxosDaCasa);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo dessa casa"
        })
    }

})

app.listen(port, () => {
    console.log(`A minha API funcionando na porta ${port}`)
});