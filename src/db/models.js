const sequelize = require('sequelize');

const db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/storage.db'
});

const col_id = {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const col_name = {
    type: sequelize.DataTypes.STRING(20),
    unique: true
}

const col_title = {
    type: sequelize.DataTypes.STRING(120),
}

const col_text = {
    type: sequelize.DataTypes.TEXT
}

const col_like = {
    type: sequelize.DataTypes.INTEGER
}

const User = db.define('user', {
    id: col_id,
    name: col_name
})

const Post = db.define('post', {
    id: col_id,
    title: col_title,
    body: col_text
})

const Comment = db.define('comment', {
    id: col_id,
    body: col_text
})

User.hasMany(Post);
User.hasMany(Comment);
Post.belongsTo(User);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);


module.exports = {db, User, Post, Comment};