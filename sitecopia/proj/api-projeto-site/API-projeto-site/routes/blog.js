var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var blogm = require('../models').blogm;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/publicar/:idUsuario', function (req, res, next) {
  console.log("Iniciando Publicação...")

  let idUsuario = req.params.idUsuario;

  blogm.create({
    descricao: req.body.descricao,
    fkUsuario: idUsuario,
    dataPost: req.body.dataPost,
    link: req.body.link
  }).then(resultado => {
    console.log("Post realizado com sucesso!!");
    res.send(resultado);
  }).catch(erro => {
    console.log('DEU UM ERRINHO')
    console.error(erro);
    res.status(500).send(erro.message);
  })
})

/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/', function (req, res, next) {
  console.log('Recuperando todas as publicações');

  let instrucaoSql = `SELECT 
    apelidoUser,
    descricao,
    dataPost,
    link
    FROM publicacaoblog
    INNER JOIN Cadastro
    ON publicacaoblog.fkUsuario = iduser
    ORDER BY publicacaoblog.id DESC`;

  sequelize.query(instrucaoSql, {
    model: blogm,
    mapToModel: true
  })
    .then(resultado => {
      console.log(`Encontrados: ${resultado.length}`);
      res.json(resultado);
    }).catch(erro => {
      console.error(erro);
      res.status(500).send(erro.message);
    });
});


/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
router.get('/:idUsuario', function (req, res, next) {
  console.log('Recuperando todas as publicações');

  var idUsuario = req.params.idUsuario;

  let instrucaoSql = `SELECT 
    apelidoUser,
    descricao,
    dataPost,
    link
    FROM publicacaoblog
    INNER JOIN Cadastro
    ON publicacaoblog.fkUsuario = ${idUsuario}
    ORDER BY publicacaoblog.id DESC`;

  sequelize.query(instrucaoSql, {
    model: blogm,
    mapToModel: true
  })
    .then(resultado => {
      console.log(`Encontrados: ${resultado.length}`);
      res.json(resultado);
    }).catch(erro => {
      console.error(erro);
      res.status(500).send(erro.message);
    });
});

module.exports = router;
