const { Item } = require('../models');

//seed Item Model with this data

const itemData = [
  {
    title: "Barely Used Stroller",
    description: "kids outgrew this, come pick up!",
    claimed: false,
    user_id: 1,
    location_id: 1,
    contact_info: "email@email.com"
  },
  {
    title: "old oil painting",
    description: "landscape painting, don't know where it came from, but not really my style",
    claimed: true,
    user_id: 1,
    location_id: 1,
    contact_info: "bob@email.com"
  },
  {
    title: "skateboard- good condition",
    description: "not into skateboarding anymore, decluttering, still in good shape",
    claimed: false,
    user_id: 2,
    location_id: 2,
    contact_info: "test@email.com"
  },
  {
    title: "toddler clothes and toys",
    description: "a bunch of stuff our baby outgrew, lots of kids books, toys, and gorls clothes",
    claimed: true,
    user_id: 3,
    location_id: 3,
    contact_info: "test@email.com"
  },
  {
    title: "vintage lamp",
    description: "cleaning out my grandma's garage, lamp has gold base and white shade",
    claimed: false,
    user_id: 3,
    location_id: 3,
    contact_info: "test@email.com"
  },
 
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;