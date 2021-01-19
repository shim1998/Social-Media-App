const route = require('express').Router();
const {getUserByName, getUserById, createUser} = require('../../controllers/users')

route.get('/:id', async (req, res) => {
    let user;
    if(isNaN(req.params.id)) user = await getUserByName(req.params.id);
    else user = await getUserById(req.params.id);
    if(user) res.status(200).send(user);
    else res.status(404).send('Invalid User Id/Name');
})

route.post('/', async(req, res) => {
    const user = await createUser();
    res.status(201).send(user);
})

module.exports = {userRoute: route}