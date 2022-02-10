const Comment = require('./Comment');
const Item = require('./Item');
const Location = require('./Location');
const User = require('./User');

User.hasMany(Item, {
    foreignKey: 'user_id'
});
Item.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Item.hasMany(Comment, {
    foreignKey: 'item_id'
});
Comment.belongsTo(Item, {
    foreignKey: 'item_id'
});

Location.hasMany(Item, {
    foreignKey: 'location_id'
});
Item.belongsTo(Location, {
    foreignKey: 'location_id'
})




module.exports = { User, Location, Item, Comment };