//controla as rotas
const Postagem = require('../models/postagens')

module.exports = app => {
    app.get('/postagens', (req, res) => {
        Postagem.lista(res);
    });

    app.get('/postagens/:id', (req, res) => { 
        const id = parseInt(req.params.id);

        Postagem.buscaPorId(id, res);
    });

    app.post('/postagens', (req, res) => {
        const postagem = req.body

        Postagem.adiciona(postagem, res)        
    })

    app.patch('/postagens/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Postagem.altera(id, valores, res)
    })

    app.delete('/postagens/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Postagem.deleta(id, res)
    })
}

