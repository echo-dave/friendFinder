//define and include dependencies
const express = require('express');
//mysql related dependencies + mysql2
require("dotenv").config();
var env = process.env.NODE_ENV || "development";

const keys = require("./app/data/keys.js");
const Sequelize = require('sequelize');

//Start express sever
const app = express();
const PORT = process.env.PORT || 8080;

const Op = Sequelize.Op;



const mysqlU = process.env.username;
const sequelize = new Sequelize(process.env.database,mysqlU,process.env.password, {
    host: process.env.host,
    port:3306,
    dialect: "mysql",
    define: {freezeTableName: true},
    query:{raw:true}

});

//MySQL connection 
/* const mysqlU = keys.db.username;
const sequelize = new Sequelize(keys.db.database,mysqlU,keys.db.password, {
    host: keys.db.host,
    port:3306,
    dialect: keys.db.dialect,
    define: {freezeTableName: true},
    query:{raw:true}

}); */

const friends = sequelize.import("models/friends_models.js");
const score = sequelize.import("models/score_models.js");
sequelize.sync();

//MySQL test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//data parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static routing config
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html'],
    maxAge: '1d',
    redirect: false,
}

//routing
app.use(express.static('app/public', options));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//404 not found routing
app.use(function (req, res) {
    res.status(404).sendFile(__dirname + "/app/public/404.html");
});


//start server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});