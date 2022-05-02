const router = require('express').Router();
const { Trip, Post, Member, Comment, ListItem } = require('../models');

router.get('/', (req, res) => {
    Trip.findAll({
        // where: {
        //     id: req.params.id
        // },
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
            const tripInfo = tripData.map(trip => trip.get({  plain: true }))
            res.render('dashboard', {
                tripInfo,
                loggedIn: true
            })
        
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

module.exports = router;