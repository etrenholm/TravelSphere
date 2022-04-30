const { Group } = require('../models');

const groupdata = [
    {
        location: 'Denver',
        start_date: 'January 1',
        end_date: 'January 7'
    },
    {
        location: 'Nashville',
        start_date: 'April 25',
        end_date: 'April 30'
    },
    {
        location: 'Germany',
        start_date: 'August 2',
        end_date: 'August 12'
    }
]

const groupSeeds = () => Group.bulkCreate(groupdata);

module.exports = groupSeeds;