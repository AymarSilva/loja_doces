import acess from '../acess.js';
import mysql from 'mysql2';

class LojaModelDoce{
    constructor(){
        this.conexao = mysql.createConnection(acess);
    };

    create(nome,id_cat){
        let sql = `INSERT INTO doces values(null,'${nome}',${id_cat})`;

        return new Promise((resolve,reject) => {
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([201,'doce criado'])
            })
        });
    };

    read(){
        let sql = `Select * from doces`;
        return new Promise((resolve,reject) => {
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400,erro]);
                }
                resolve([200,retorno]);
            })
        });
    };

    update(index,nome,id_cat){
        let sql = `UPDATE doces set nome_doce='${nome}',id_categoria=${id_cat} where id_doce=${index}`;

        return new Promise((resolve,reject) => {
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400,erro]);
                }
                resolve([202,'doce atualizado']);
            })
        });
    };

    delete(index){
        let sql = `DELETE FROM doces where id_doce=${index}`;

        return new Promise((resolve,reject) => {
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400,erro]);
                }
                resolve([202,'doce deletado']);
            })
        });
    };
};
export default new LojaModelDoce();