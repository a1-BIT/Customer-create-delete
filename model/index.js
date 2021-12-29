require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('test','root', process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.authenticate().then(()=>{
    console.log('Connnected');
}).catch((err)=>{
    console.log(err.message);
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require('./customer') (sequelize, DataTypes)

db.sequelize.sync({alert: true}).then((result)=>{
    console.log('sync done', result);
}).catch((err)=>{
    console.log(err);
})

module.exports = db;