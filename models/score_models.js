module.exports = function (sequelize, DataTypes) {
    return score = sequelize.define('score', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        q1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q4: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q5: {
            type: DataTypes.INTEGER,
            allowNull: false
        },  
        q6: {
            type: DataTypes.INTEGER,
            allowNull: false
        },  
        q7: {
            type: DataTypes.INTEGER,
            allowNull: false
        },  
        q8: {
            type: DataTypes.INTEGER,
            allowNull: false
        },  
        q9: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q10: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        },{
            timestamps: false

    });
};