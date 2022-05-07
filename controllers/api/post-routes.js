const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Member, Post, Comment } = require('../../models');
const c = require('ansi-colors');

// GET all posts
router.get('/', (req, res) => {
  Post.findAll({
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'member_id', 'trip_id'],
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
    .then((postData) => {
      res.json(postData)
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});

// GET post by id
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
      'member_id'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'member_id', 'trip_id'],
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
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(postData);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});


// POST new post
router.post('/', withAuth, (req, res) => {

  console.log(c.info(req.body, req.session))

  Post.create({
    title: req.body.title,
    url: req.body.url,
    post_content: req.body.post_content,
    trip_id: req.session.trip_id,
    member_id: req.session.member_id
  })
    .then(postData => res.json(postData))
    .catch((err) => {
      res.status(500).json(err);
    })
});

// DELETE post (if time allows)

// UPDATE post (if time allows)


module.exports = router;