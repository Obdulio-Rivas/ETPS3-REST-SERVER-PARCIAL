module.exports = (sequelize, type) => {
    return sequelize.define('comment', {
        //Llave Primaria.
        postId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        //Información.
        id: type.INTEGER,
        name: type.STRING,
        email: type.STRING,
        body: type.STRING
    });
}