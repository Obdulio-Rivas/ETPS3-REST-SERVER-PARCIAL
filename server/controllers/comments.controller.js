//Instancia del Model User para la BD.
const { Comment } = require('../db/database.db');

async function getAllComments(req, res) {
    const comments = await Comment.findAll({
        attributes: ['postId', 'id', 'name', 'email', 'body']
    });
    res.status(200).json({
        comments
    });
}

module.exports = {
    getAllComments
};