import LojaModelDoce from '../Models/lojaModelDoce.js';

class LojaControllerDoce{

    create(req,res){
        const nome = req.body.nome;
       // const index = req.params.index;
        const id_cat = req.body.id;

        LojaModelDoce.create(nome,id_cat).then(
            resposta =>{
                console.debug("criando doces");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: criando doces");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };

    read(req,res){
        LojaModelDoce.read().then(
            resposta =>{
                console.debug("Exibindo doces");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo doces");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };

    update(req,res){
        const nome = req.body.nome;
        const index = req.params.index;
        const id_cat = req.body.id;

        LojaModelDoce.update(index,nome,id_cat).then(
            resposta =>{
                console.debug("atualizando doces");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: atualizando doces");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };

    delete(req,res){
        const index = req.params.index;

        LojaModelDoce.delete(index).then(
            resposta =>{
                console.debug("deletando doces");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: deletando doces");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };
};
export default new LojaControllerDoce();