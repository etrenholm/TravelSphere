const { ListItem } = require('../models');

const listitemdata = [
    {
        item_text: 'Book hotel',
        member_id: 1
    },
    {
        item_text: 'Buy tickets to concert at Red Rocks',
        member_id: 2
    },
    {
        item_text: 'Plan day in Boulder',
        member_id: 3
    }
]

const listItemSeeds = () => ListItem.bulkCreate(listitemdata);

module.exports = listItemSeeds;