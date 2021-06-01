'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
  let atividadem = sequelize.define('atividadem', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    atividade: {
      field: 'atividade',
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      field: 'tipo',
      type: DataTypes.STRING,
      allowNull: false
    },
    fkUsuario: {
      field: 'fkUsuario',
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dataPost: {
      field: 'dataPost',
      type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
      allowNull: false
    }
  },
    {
      tableName: 'atividade',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return atividadem;
};
