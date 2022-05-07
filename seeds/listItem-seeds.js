const { ListItem } = require('../models');

const listitemdata = [
    {
        item_text: 'Book hotel',
        trip_id: 1,
        member_id: 1
    },
    {
        item_text: 'Buy tickets to concert at Red Rocks',
        trip_id: 1,
        member_id: 2
    },
    {
        item_text: 'Plan day in Boulder',
        trip_id: 1,
        member_id: 3
    },
    {
        item_text: 'Book hotel',
        trip_id: 2,
        member_id: 4
    },
    {
        item_text: 'Buy tickets to concert at Red Rocks',
        trip_id: 2,
        member_id: 4
    },
    {
        item_text: 'Plan day in Boulder',
        trip_id: 2,
        member_id: 5
    }
]

const listItemSeeds = () => ListItem.bulkCreate(listitemdata);

module.exports = listItemSeeds;