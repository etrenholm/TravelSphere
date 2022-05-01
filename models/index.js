// import models
const ListItem = require('./ListItem');
const Comment = require('./Comment');
const Post = require('./Post');
const Member = require('./Member');
const Group = require('./Group');

// create associations

// Group
Group.hasMany(Member, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});

Group.hasMany(Post, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});

Group.hasMany(Comment, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});

Group.hasMany(ListItem, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});

// Member
Member.belongsTo(Group, {
    foreignKey: 'group_id'
});

Member.hasMany(Post, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
});

Member.hasMany(Comment, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
});

Member.hasMany(ListItem, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
});

// Post
Post.belongsTo(Member, {
    foreignKey: 'member_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Comments
Comment.belongsTo(Group, {
    foreignKey: 'member_id',
});
  
Comment.belongsTo(Member, {
    foreignKey: 'member_id',
});
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// list items
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