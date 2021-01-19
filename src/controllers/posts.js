const {db, Post, User} = require('../db/models')

async function createPost(userid, title, body){
    const post = await Post.create({
        userId: userid,
        body: body,
        title: title
    });
    return post;
}

async function getAllPost(){
    const posts = await Post.findAll({include: [User]});
    return posts;
}

async function getPostByPostId(postid){
    const post = await Post.findOne({where: {id: postid}, include: [User]});
    return post;
}

async function getPostByUserId(userid){
    const post = await Post.findAll({include: [{model: User, where: {id:userid}}]});
    return post;
}

// async function task(){
//     console.log(await createPost(1, 'sample post', 'main yahan kuch likh raha hun'))
//     const posts = await showAllPost();
//     for(let p of posts) console.log(`${p.title} ${p.body} === ${p.user.name}`)
// }


// task();

module.exports = {createPost, getAllPost, getPostById: getPostByPostId, getPostByUserId};
