const { Post } = require('../models');

const postdata = [
    {
        title: 'Larimer Square',
        url: 'https://www.larimersquare.com/',
        post_content: 'We could go here on Thursday afternoon.',
        user_id: 1
    },
    {
        title: 'Denver Botanic Gardens',
        url: 'https://www.botanicgardens.org/',
        post_content: 'I heard this was cool. Only $15.',
        user_id: 2
    },
    {
        title: 'Red Rocks Park & Amphitheatre',
        url: 'https://www.redrocksonline.com',
        post_content: 'Probably need a whole morning or afternoon for this.',
        user_id: 3
    }
]

const postSeeds = () => Post.bulkCreate(postdata);

module.exports = postSeeds;