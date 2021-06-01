'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
  let Testando = sequelize.define('Testando', {
    id_testando: {
      field: 'id_testando',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email_testando: {
      field: 'email_testando',
      type: DataTypes.STRING,
      allowNull: false
    },
    login_testando: {
      field: 'login_testando',
      type: DataTypes.STRING,
      allowNull: false
    },
    senha_testando: {
      field: 'senha_testando',
      type: DataTypes.STRING,
      allowNull: false
    },
    fk_tesntando: {
      field: 'fk_tesntando',
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
    {
      tableName: 'CadastroTestando',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return Testando;
};
