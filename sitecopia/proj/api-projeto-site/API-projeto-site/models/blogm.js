'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
  let blogm = sequelize.define('blogm', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      field: 'descricao',
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      field: 'link',
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
      tableName: 'publicacaoblog',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return blogm;
};
