const { User } = require("../models");

const userData = [
    {
        name: "dougfunnie",
        password: "ilovepatty",
        email: "Boo@test.com",
        location_id: 1,
    },
    {
        name: "raskolnikov",
        password: "siberiasucks",
        email: "Far@test.com",
        location_id: 1,
    },
    {
        name: "wrathofsanity",
        password: "315xvx",
        email: "Foo@test.com",
        location_id: 2,
    },
    {
        name: "glenndanzig",
        password: "twistofcain666",
        email: "Bar@test.com",
        location_id: 2,
    },
    {
        name: "billymadison",
        password: "iloveveronicavaughn",
        email: "BooFar@test.com",
        location_id: 3,
    },
    {
        name: "esponguebob",
        password: "bikinibottom99",
        email: "Foobar@test.com",
        location_id: 3,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;