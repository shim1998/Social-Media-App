const {db, Comment, Post, User} = require('../db/models')

async function createComment(userid, postid, body) {
    const comment = await Comment.create({
        userId: userid,
        postId: postid,
        body: body
    })
    return comment;
}

async function getCommentsByPost(postid){
    const comments = await Comment.findAll({where: {postId: postid}, include: [User]});
    return comments;
}

module.exports = {createComment, getCommentsByPost};


