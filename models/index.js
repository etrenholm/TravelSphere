// import models
const ListItem = require('./ListItem');
const Comment = require('./Comment');
const Post = require('./Post');
const Member = require('./Member');
const Trip = require('./Trip');

// create associations

// Trip
Trip.hasMany(Member, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE'
});

Trip.hasMany(Post, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE'
});

Trip.hasMany(Comment, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE'
});

Trip.hasMany(ListItem, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE'
});

// Member
Member.belongsTo(Trip, {
    foreignKey: 'trip_id'
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
Post.belongsTo(Trip, {
    foreignKey: 'trip_id'
});

Post.belongsTo(Member, {
    foreignKey: 'member_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Comments
Comment.belongsTo(Trip, {
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
    Trip,
    Member,
    Post,
    Comment,
    ListItem
};