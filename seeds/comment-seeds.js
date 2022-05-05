const { Comment } = require('../models');

const commentdata = [

    // TRIP 1

    {
        comment_text: 'Sounds fun!',
        trip_id: 1,
        member_id: 1,
        post_id: 1
    },
    {
        comment_text: 'I visited this last time.',
        trip_id: 1,
        member_id: 1,
        post_id: 2
    },
    {
        comment_text: 'I think we should go if we have time.',
        trip_id: 1,
        member_id: 2,
        post_id: 2
    },
    {
        comment_text: 'How close is this to the hotel?',
        trip_id: 1,
        member_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Sure!',
        trip_id: 1,
        member_id: 2,
        post_id: 2
    },
    {
        comment_text: 'I think we could walk here from our hotel.',
        trip_id: 1,
        member_id: 3,
        post_id: 3
    },
    {
        comment_text: 'This can be the last stop before we leave.',
        trip_id: 1,
        member_id: 3,
        post_id: 1
    },

    // TRIP 2

    {
        comment_text: 'I have wanted to visit.',
        trip_id: 2,
        member_id: 4,
        post_id: 4
    },
    {
        comment_text: 'Sure.',
        trip_id: 2,
        member_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Sounds good to me.',
        trip_id: 2,
        member_id: 4,
        post_id: 5
    },
    {
        comment_text: 'You know I am easygoing so I will go anywhere',
        trip_id: 2,
        member_id: 5,
        post_id: 5
    },
    {
        comment_text: 'I am in!',
        trip_id: 2,
        member_id: 4,
        post_id: 6
    },
    {
        comment_text: 'Could we go at night?',
        trip_id: 2,
        member_id: 5,
        post_id: 6
    },
    {
        comment_text: 'I want to do this when it is nice out.',
        trip_id: 2,
        member_id: 4,
        post_id: 6
    },

    // TRIP 3

    {
        comment_text: 'Yes!',
        trip_id: 3,
        member_id: 6,
        post_id: 7
    },
    {
        comment_text: 'I have been here before.',
        trip_id: 3,
        member_id: 6,
        post_id: 7
    },
    {
        comment_text: 'Should we plan this for the day?',
        trip_id: 3,
        member_id: 7,
        post_id: 8
    },
    {
        comment_text: 'I love stuff like this.',
        trip_id: 3,
        member_id: 7,
        post_id: 8
    },
    {
        comment_text: 'How close is this to the train?',
        trip_id: 3,
        member_id: 8,
        post_id: 9
    },
    {
        comment_text: 'Sounds like a plan!',
        trip_id: 3,
        member_id: 8,
        post_id: 9
    },
    {
        comment_text: 'Maybe if we have time.',
        trip_id: 3,
        member_id: 8,
        post_id: 9
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
