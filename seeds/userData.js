const { User } = require("../models");

const userData = [
    {
        name: "dougfunnie",
        password: "ilovepatty",
        location_id: 1,
    },
    {
        name: "raskolnikov",
        password: "siberiasucks",
        location_id: 1,
    },
    {
        name: "wrathofsanity",
        password: "315xvx",
        location_id: 2,
    },
    {
        name: "glenndanzig",
        password: "twistofcain666",
        location_id: 2,
    },
    {
        name: "billymadison",
        password: "iloveveronicavaughn",
        location_id: 3,
    },
    {
        name: "esponguebob",
        password: "bikinibottom99",
        location_id: 3,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;