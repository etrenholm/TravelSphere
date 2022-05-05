const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

// GET all comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then(commentData => res.json(commentData))
        .catch((err) => {
            res.status(500).json(err);
        })
  });

// POST new comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            trip_id: req.session.trip_id,
            member_id: req.session.member_id
        })
        .then(commentData => res.json(commentData))
        .catch((err) => {
            res.status(500).json(err);
            console.log(err)
        })
    }
});

module.exports = router;
