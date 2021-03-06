const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { ListItem } = require('../../models');

// GET all list items
router.get('/', (req, res) => {
    ListItem.findAll({})
        .then((listData) => {
            res.json(listData)
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

// Post new list item
router.post('/', withAuth, (req, res) => {
    ListItem.create({
        item_text: req.body.item_text,
        trip_id: req.session.trip_id,
        member_id: req.session.member_id
    })
        .then(listData => res.json(listData))
        .catch((err) => {
            res.status(500).json(err);
        })
});

module.exports = router;