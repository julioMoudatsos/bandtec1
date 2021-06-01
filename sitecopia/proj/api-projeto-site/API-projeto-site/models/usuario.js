'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		iduser: {
			field: 'iduser',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		apelido: {
			field: 'apelidoUser',
			type: DataTypes.STRING,
			allowNull: false
		},

		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	},
		{
			tableName: 'cadastro',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Usuario;
};
