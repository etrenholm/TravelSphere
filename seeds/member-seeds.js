const { Member } = require('../models');

const memberdata = [
    {
        username: 'etrenholm',
        password: 'password123',
        group_id: 1
    },
    {
        username: 'ryanz',
        password: 'password123',
        group_id: 1
    },
    {
        username: 'joshpdlv',
        password: 'password123',
        group_id: 1
    },
    {
        username: 'alesmonde0',
        password: 'password123',
        group_id: 2
    },
    {
        username: 'jwilloughway1',
        password: 'password123',
        group_id: 2
    },
    {
        username: 'djiri4',
        password: 'password123',
        group_id: 3
    },
    {
        username: 'hannah123',
        password: 'password123',
        group_id: 3
    },
    {
        username: 'johnsmith',
        password: 'password123',
        group_id: 3
    }
]

const memberSeeds = () => Member.bulkCreate(memberdata);

module.exports = memberSeeds;