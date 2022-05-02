const router = require('express').Router();
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
router.post('/', (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            trip_id: req.body.trip_id,
            post_id: req.body.post_id,
            member_id: req.body.member_id
            // member_id: req.session.member_id
        })
        .then(commentData => res.json(commentData))
        .catch((err) => {
            res.status(500).json(err);
            console.log(err)
        })
    }
});

module.exports = router;
