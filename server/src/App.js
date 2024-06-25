import express from 'express'
import LojaControllerCategoria from './Controllers/lojaControllerCategoria.js';
import LojaControllerDoce from './Controllers/lojaControllerDoce.js';

const porta = 5000;
const server = express();

server.use(express.json());

server.get('/categorias',LojaControllerCategoria.read);
server.post('/categorias',LojaControllerCategoria.create);
server.put('/categorias/:index',LojaControllerCategoria.update);
server.delete('/categorias/:index',LojaControllerCategoria.delete);

server.get('/doces',LojaControllerDoce.read);
server.post('/doces/',LojaControllerDoce.create);
server.put('/doces/:index',LojaControllerDoce.update);
server.delete('/doces/:index',LojaControllerDoce.delete);

server.listen(porta, ()=>{
    console.debug(`server rodando na porta ${porta}`);
});