const {Location} = require('../models');
const { Item } = require ('../models')

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

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;

