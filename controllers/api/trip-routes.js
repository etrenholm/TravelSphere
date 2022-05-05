const router = require('express').Router();
const { Trip, Member, Post, Comment, ListItem } = require('../../models');

// GET all trips
router.get('/', (req, res) => {
    Trip.findAll({
        attributes: [
            'id',
            'uuid',
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
    .then((tripData) => {
        res.json(tripData)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// GET trip by id
router.get('/:id', (req, res) => {
    Trip.findOne({
        where: {
            id: req.params.id
        },
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
    .then((tripData) => {
        res.json(tripData)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// POST/CREATE new trip
router.post('/', (req, res) => {
    Trip.create({
        location: req.body.location,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    })
    .then(tripData => res.json(tripData))
    .catch((err) => {
        res.status(500).json(err);
    })
});

module.exports = router;