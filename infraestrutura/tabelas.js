class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarTabelas()
    }

    criarTabelas(){
        const sql = 'CREATE TABLE IF NOT EXISTS postagens (id int NOT NULL AUTO_INCREMENT, user varchar(50) NOT NULL, categoria varchar(20),servico varchar(20) NOT NULL, conteudo text, dataCriacao timestamp DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))'
    

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('tabela de postagens criada')
            }
        })
    }

}

module.exports = new Tabelas