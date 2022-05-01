const router = require('express').Router();
const { Post, Member, Comment } = require('../models');

// GET all posts for dashboard
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            group_id: req.session.group_id
        },
        attributes: [
            'id',
            'title',
            'url',
            'post_content'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'member_id',
                    'post_id'
                ],
                include: {
                    model: Member,
                    attributes: ['username']
                }
            },
            {
                model: Member,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {

        // RENDER to dashboard.handlebars
        const posts = postData.map(post => post.get({  plain: true }))
        res.render('dashboard', {
            posts,
            loggedIn: true
        })
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// GET single post by id
router.get('/edit/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'url',
            'post_content'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'member_id',
                    'post_id'
                ],
                include: {
                    model: Member,
                    attributes: ['username']
                }
            },
            {
                model: Member,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {

        // RENDER to dashboard.handlebars
        const posts = postData.map(post => post.get({  plain: true }))
        res.render('edit-post', {
            posts,
            loggedIn: true
        })
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// // GET create post
// router.get('/create', (req, res) => {

//     // RENDER to create-post.handlebars
//     res.render('create-post', {
//         loggedIn: true
//     })
// });


// GET all list items
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            group_id: req.session.group_id
        },
        attributes: [
            'id',
            'item_text'
        ]
    })
    .then(listData => {

        // RENDER to dashboard.handlebars
        const listitems = listData.map(listitem => listitem.get({  plain: true }))
        res.render('dashboard', {
            listitems,
            loggedIn: true
        })
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// // GET create list item
// router.get('/create', (req, res) => {

//     // RENDER to create-post.handlebars
//     res.render('create-list-item', {
//         loggedIn: true
//     })
// });

module.exports = router;