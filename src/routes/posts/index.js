const { getAllPost, createPost, getPostById, getPostByUserId } = require('../../controllers/posts');
const route = require('express').Router();

route.get('/', async (req, res) => {
    let posts = await getAllPost();
    res.status(200).send(posts);
})

route.post('/', async (req, res) => {
    const {userId, title, body} = req.body;
    if(!userId || !title || !body) return res.status(400).send('Bad request');
    const post = await createPost(userId, title, body);
    res.status(201).send(post);
})

route.get('/:id', async(req, res) => {
    const post = await getPostById(req.params.id);
    res.status(201).send(post);
})

route.get('/user/:id', async(req, res) => {
    const post = await getPostByUserId(req.params.id);
    res.status(201).send(post);
})

//todo: add like feature
// route.post('/like', async(req, res) => {
//     const {postId} = req.body;
//     if(!postId) return res.status(400).send('Bad request');
//     c
// })

module.exports = {postRoute: route}