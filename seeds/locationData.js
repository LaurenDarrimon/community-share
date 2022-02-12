const {Location} = require('../models');

const locationData = [
    {
        location: 'San Francisco'
    },
    {
        location: 'Berkeley'
    },
    {
        location: 'Fremont'
    },

];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;

