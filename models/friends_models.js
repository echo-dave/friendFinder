module.exports = function (sequelize, DataTypes) {
    return friends = sequelize.define('friends', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING(150),
            allowNull: true,
            defaultValue: "NULL"
        },
    },{
        timestamps: false
        

    });
};