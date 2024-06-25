import acess from '../acess.js';
import mysql from 'mysql2';

class LojaModelCategoria{
    constructor(){
        this.conexao = mysql.createConnection(acess);
    };

    create(nome){
        let sql = `INSERT INTO categorias values(null,'${nome}')`;

        return new Promise((resolve,reject) => {
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([201,'categoria criada'])
            })
        });
    };

    read(){
        let sql = `Select * from categorias`
        return new Promise((resolve,reject) => {
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400,erro]);
                }
                resolve([200,retorno]);
            })
        });
    };

    update(id,nome){
        let sql = `UPDATE categorias SET nome_categoria='${nome}' where id_categoria=${id}`;
        return new Promise((resolve,reject) => {
            this.conexao.query(sql, (erro,retorno)=>{
                if(retorno.affectedRows>1){
                    reject([409,'Mais de uma linha sendo alterada'])
                };
                if(erro){
                    reject([400,erro]);
                }
                resolve([200,'Categoria atualizada']);
            })
        }); 
    };

    delete(id){
        let sql = `DELETE FROM categorias WHERE id_categoria=${id}`;
        return new Promise((resolve,reject) => {
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400,erro]);
                }
                resolve([200,'Categoria deletada']);
            })
        }); 
    };
};
export default new LojaModelCategoria();