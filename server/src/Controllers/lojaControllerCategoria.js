import LojaModelCategoria from '../Models/lojaModelCategoria.js';

class LojaControllerCategoria{
    create(req,res){
        const nome = req.body.nome;

        LojaModelCategoria.create(nome).then(
            resposta =>{
                console.debug("criando categorias");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: criando categorias");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };

    read(req,res){
        LojaModelCategoria.read().then(
            resposta =>{
                console.debug("Exibindo categorias");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo categorias");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };

    update(req,res){
        const id = req.params.index;
        const nome = req.body.nome;

        LojaModelCategoria.update(id,nome).then(
            resposta =>{
                console.debug("atualizando categorias");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: atualizando categorias");
                res.status(resposta[0]).json(resposta[1]);
            }
        );        
    };

    delete(req,res){
        const id = req.params.index;

        LojaModelCategoria.delete(id).then(
            resposta =>{
                console.debug("deletando categorias");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: deletando categorias");
                res.status(resposta[0]).json(resposta[1]);
            }
        ); 
    };
};
export default new LojaControllerCategoria();