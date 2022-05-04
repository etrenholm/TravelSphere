const { Post } = require('../models');

const postdata = [
    {
        title: 'Larimer Square',
        url: 'https://www.larimersquare.com/',
        post_content: 'We could go here on Thursday afternoon.',
        trip_id: 1,
        member_id: 1
    },
    {
        title: 'Denver Botanic Gardens',
        url: 'https://www.botanicgardens.org/',
        post_content: 'I heard this was cool. Only $15.',
        trip_id: 1,
        member_id: 2
    },
    {
        title: 'Red Rocks Park & Amphitheatre',
        url: 'https://www.redrocksonline.com',
        post_content: 'Probably need a whole morning or afternoon for this.',
        trip_id: 1,
        member_id: 3
    },
    {
        title: 'Country Music Hall of Fame',
        url: 'https://countrymusichalloffame.org/',
        post_content: 'Lets go here.',
        trip_id: 2,
        member_id: 4
    },
    {
        title: 'Grand Ole Opry',
        url: 'https://www.opry.com/',
        post_content: 'Maybe we should see a concert.',
        trip_id: 2,
        member_id: 4
    },
    {
        title: 'Centennial Park',
        url: 'https://www.nashville.gov/departments/parks/parks/centennial-park',
        post_content: 'Looks like a couple hours.',
        trip_id: 2,
        member_id: 5
    },
    {
        title: 'Brandenburg Gate',
        url: 'https://www.visitberlin.de/en/brandenburg-gate',
        post_content: 'Lets go here.',
        trip_id: 3,
        member_id: 6
    },
    {
        title: 'East Side Gallery',
        url: 'http://eastsidegallery-berlin.com/',
        post_content: 'This looks cool.',
        trip_id: 3,
        member_id: 7
    },
    {
        title: 'Berlin TV Tower',
        url: 'https://tv-turm.de/en/',
        post_content: 'There is a restaurant at the top!',
        trip_id: 3,
        member_id: 8
    }
]

const postSeeds = () => Post.bulkCreate(postdata);

module.exports = postSeeds;