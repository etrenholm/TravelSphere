const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Trip, Member, Post, Comment, ListItem } = require('../../models');

// GET all members
router.get('/', (req, res) => {
    Member.findAll({
        attributes: {
            exclude: ['password']
        }
    })
        .then((memberData) => {
            res.json(memberData)
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

// GET member by id
router.get('/:id', (req, res) => {
    Member.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Trip,
                attributes: ['location', 'start_date', 'end_date']
            },
            {
                model: Post,
                attributes: ['id', 'title', 'url', 'post_content']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'member_id']
            },
            {
                model: ListItem,
                attributes: ['id', 'item_text', 'member_id']
            }
        ]
    })
        .then(memberData => {
            if (!memberData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(memberData);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

// CREATE new member
router.post('/', (req, res) => {
    console.log(req.body)
    Member.create({
        username: req.body.username,
        password: req.body.password,
        trip_id: parseInt(req.body.trip_id)
    })
        .then(memberData => {
            req.session.save(() => {
                req.session.member_id = memberData.id;
                req.session.username = memberData.username;
                req.session.trip_id = memberData.trip_id;
                req.session.loggedIn = true;

                res.json(memberData);
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

// POST/CREATE login event
router.post('/login', (req, res) => {
    console.log(req.body)
    Member.findOne({
        where: {
            username: req.body.username
        }
    }).then(memberData => {
        if (!memberData) {
            res.status(400).json({ message: 'No member with this username!' });
            return;
        }

        const validPassword = memberData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.member_id = memberData.id;
            req.session.username = memberData.username;
            req.session.trip_id = memberData.trip_id;
            req.session.loggedIn = true;

            res.json({ user: memberData, message: 'You are now logged in!' });
        });
    });
});

// POST/CREATE logout event
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});


module.exports = router;