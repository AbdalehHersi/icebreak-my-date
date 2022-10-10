const User = require('./User');
const Favourites = require('./Favourites');

User.hasMany(Favourites, {
foreignKey: 'user_id',
onDelete: 'CASCADE'
});

Favourites.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });

    module.exports = {
        User,
        Favourites
    }
