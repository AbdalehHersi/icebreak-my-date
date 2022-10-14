const User = require('./User');
const Favourite = require('./Favourite');

User.hasMany(Favourite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favourite.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Favourite
}
