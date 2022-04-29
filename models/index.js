// import models
const ListItem = require('./ListItem');
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');
const Group = require('./Group');

// user and group
Group.hasMany(User, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
})

User.belongsTo(Group, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
})

// posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// comments
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// list items
User.hasMany(ListItem, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
ListItem.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Group,
    User,
    Post,
    Comment,
    ListItem
}
  