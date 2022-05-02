const router = require('express').Router();
const { ListItem } = require('../../models');

// GET all list items
router.get('/', (req, res) => {
    ListItem.findAll({ })
    .then((listData) => {
        res.json(listData)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// Post new list item
router.post('/', (req, res) => {
    ListItem.create({
        item_text: req.body.item_text,
        trip_id: req.body.trip_id,
        member_id: req.body.member_id
        // member_id: req.session.member_id
    })
    .then(listData => res.json(listData))
    .catch((err) => {
        res.status(500).json(err);
    })
});

module.exports = router;