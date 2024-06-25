import express from 'express'

const porta = 5000;
const server = express();

server.use(express.json());

server.get('/',LojaDocesCategoria.read())

server.listen(porta, ()=>{
    console.debug(`server rodando na porta ${porta}`);
});