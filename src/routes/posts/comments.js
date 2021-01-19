const { createComment, getCommentsByPost } = require('../../controllers/comments');
const route = require('express').Router();

route.post('/', async (req, res) => {
    let {userId, postId, body} = req.body;
    if(!userId || !postId || !body)return res.status(404).send('Bad request');
    let comment = createComment(userId, postId, body);
    res.status(201).send(comment);
})

route.get('/:id', async (req, res) => {
    let comments = getCommentsByPost(req.params.id);
    res.status(201).send(comments);
})

module.exports = {commentRoute: route}