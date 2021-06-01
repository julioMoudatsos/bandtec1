var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var atividadem = require('../models').atividadem;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/publicar/:idUsuario', function (req, res, next) {
  console.log("Iniciando Publicação...")

  let idUsuario = req.params.idUsuario;

  atividadem.create({
    atividade: req.body.atividade,
    fkUsuario: idUsuario,
    dataPost: req.body.dataPost,
    tipo: req.body.tipo
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

  let instrucaoSql = `select 
  (select count(tipo) from atividade where tipo="anime")anime,
  (select count(tipo) from atividade where tipo="drama")drama,
  (select count(tipo) from atividade where tipo="comedia")comedia,
  (select count(tipo) from atividade where tipo="suspense")suspense,
  (select count(tipo) from atividade where tipo="cartoon")cartoon,
  (select count(tipo) from atividade where tipo="ficção")ficção,
  (select count(tipo) from atividade where tipo="outro")outro `;

  sequelize.query(instrucaoSql, {
    model: atividadem,
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

  let instrucaoSql = `select 
  (select count(tipo) from atividade where tipo="anime" and atividade.fkUsuario=${idUsuario})anime,
  (select count(tipo) from atividade where tipo="drama" and atividade.fkUsuario=${idUsuario})drama,
  (select count(tipo) from atividade where tipo="comedia" and atividade.fkUsuario=${idUsuario})comedia,
  (select count(tipo) from atividade where tipo="suspense" and atividade.fkUsuario=${idUsuario})suspense,
  (select count(tipo) from atividade where tipo="cartoon" and atividade.fkUsuario=${idUsuario})cartoon,
  (select count(tipo) from atividade where tipo="ficção" and atividade.fkUsuario=${idUsuario})ficção,
  (select count(tipo) from atividade where tipo="outro" and atividade.fkUsuario=${idUsuario})outro `;

  sequelize.query(instrucaoSql, {
    model: atividadem,
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
