const router = require('express').Router();
const { Group, Member, Post, Comment, ListItem } = require('../../models');

// GET all groups
router.get('/', (req, res) => {
    Group.findAll({ })
    .then((groupData) => {
        res.json(groupData)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// GET group by id
router.get('/:id', (req, res) => {
    Group.findOne({
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
    .then((groupData) => {
        res.json(groupData)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// POST/CREATE new group
router.post('/', (req, res) => {
    Group.create({
        location: req.body.location,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    })
    .then(groupData => res.json(groupData))
    .catch((err) => {
        res.status(500).json(err);
    })
});

module.exports = router;