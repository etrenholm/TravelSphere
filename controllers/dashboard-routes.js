const router = require('express').Router();
const { Trip, Post, Member, Comment, ListItem } = require('../models');
const c = require('ansi-colors');

router.get('/', (req, res) => {
    console.log(c.info(req.session.trip_id))
    Trip.findOne({
        where: {
            id: req.session.trip_id
        },
        attributes: [
            'id',
            'location',
            'start_date',
            'end_date'
        ],
        include: [
            {
                model: Member,
                attributes: ['username']
            },
            {
                model: ListItem,
                attributes: ['id', 'item_text', 'member_id']
            },
            {
                model: Post,
                attributes: ['id', 'title', 'url', 'post_content', 'member_id'],
                include: [
                    {
                        model: Comment,
                        attributes: ['id', 'comment_text', 'member_id']
                    },
                ]
            },
        ]
    })
        .then(tripData => {

            // RENDER to dashboard.handlebars
            const tripInfo = tripData.get({ plain: true })

            res.render('dashboard', {
                tripInfo,
                loggedIn: true,
            })

        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

// GET create post page
router.get('/create', (req, res) => {

    console.log(c.success("worked"))

    // RENDER to create-post.handlebars
    res.render('create-post', {
        loggedIn: true
    })
});

// GET a single post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'url',
            'post_content',
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'member_id'
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
            if (postData) {

                console.log(c.success("worked"))

                // RENDER to view-post.handlebars
                const posts = postData.get({ plain: true })

                res.render('view-post', {
                    posts,
                    loggedIn: true
                })
            } else {
                res.status(404).end()
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
});

module.exports = router;