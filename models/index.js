// import models
const ListItem = require('./ListItem');
const Comment = require('./Comment');
const Post = require('./Post');
const Member = require('./Member');
const Group = require('./Group');

// create associations
// member and group
Group.hasMany(Member, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
})

Member.belongsTo(Group, {
    foreignKey: 'group_id'
})

// posts
Member.hasMany(Post, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(Member, {
    foreignKey: 'member_id'
});

// comments
Member.hasMany(Comment, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Member, {
    foreignKey: 'member_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// list items
Member.hasMany(ListItem, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
});
  
ListItem.belongsTo(Member, {
    foreignKey: 'member_id'
});

module.exports = {
    Group,
    Member,
    Post,
    Comment,
    ListItem
}