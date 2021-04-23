const Sequelize = require('sequelize');
const Faker = require('faker');
const DBConfig = require('../config/db.config');

//Instanciamos Sequelize.
const sequelize = new Sequelize(
    DBConfig.DB,
    DBConfig.USER,
    DBConfig.PASSWORD,
    {
        host: DBConfig.HOST,
        dialect: DBConfig.dialect
    }
);

//Abstracto Commentarios.
const CommentModel = require('../models/comments.model');

//Comment.
const Comment = CommentModel(sequelize, Sequelize);

//Polamos la tabla con algunos datos de inicio.
const initData = () => {
    //Tabla de roles.
    for (var i = 0; i < 10; i++) {
        var comment = {
            id: i+1,
            name: Faker.lorem.sentence(4),
            email: Faker.internet.email(),
            body: Faker.lorem.paragraph(1)
        }
        Comment.create(comment);
    }
}

//Sincronizacion de la BD...
sequelize.sync({force: false}).then(()=>{
    //LLenamos las tablas catalogo.
    initData();
    console.log('Tablas correctamente sincronizadas!');
});

module.exports = {
    Comment
}