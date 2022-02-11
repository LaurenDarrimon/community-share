const {Location, Item} = require('../models');

const locationData = [
    {
        location: 'San Francisco',
        item_id: 1
    },
    {
        location: 'Berkeley',
        item_id: 2
    },
    {
        location: 'Fremont',
        item_id: 3
    },

];

const seedLocation = () => Location.bultCreate(locationData);

module.exports = seedLocation;

