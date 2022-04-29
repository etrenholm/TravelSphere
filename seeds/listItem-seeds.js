const { ListItem } = require('../models');

const listitemdata = [
    {
        item_text: 'Book hotel',
        user_id: 1
    },
    {
        item_text: 'Buy tickets to concert at Red Rocks',
        user_id: 2
    },
    {
        item_text: 'Plan day in Boulder',
        user_id: 3
    }
]

const listItemSeeds = () => ListItem.bulkCreate(listitemdata);

module.exports = listItemSeeds;