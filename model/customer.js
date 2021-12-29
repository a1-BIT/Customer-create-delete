const sequelize = require('./index');
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes)=>{
    const Customer = sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            required: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false,
            }
        }
    })
    return Customer
}