const {Router} = require('express');
//Controller's
const commentsController = require('../controllers/comments.controller');
//Instanacia del Router.
const router = Router();

//Devuelve todos los comentarios.
router.get('/comments', commentsController.getAllComments);

module.exports = router;