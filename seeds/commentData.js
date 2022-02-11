const { Comment } = require('../models');

//seed comment table with this data


const commentData = [
  {
    content: 'I would love this! thank you!',
    user_id: 3,
    item_id: 1
  },
  {
    content: 'I was just looking for one of these!',
    user_id: 3,
    item_id: 2
  },
  {
    content: 'Love it! thank you!',
    user_id: 2,
    item_id: 2
  },
  {
    content: 'I would love this! thank you!',
    user_id: 1,
    item_id: 4
  },
  {
    content: 'I will take this!',
    user_id: 1,
    item_id: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;