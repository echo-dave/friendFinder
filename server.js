//define and include dependencies
const express = require('express');
//mysql related dependencies + mysql2
require("dotenv").config();
const keys = require("./app/data/keys.js");
const Sequelize = require('sequelize');

//Start express sever
const app = express();
const PORT = process.env.PORT || 8080;

//MySQL connection 
const sequelize = new Sequelize(keys.db.database,keys.db.username,keys.db.password, {
    host: keys.db.host,
    port:3306,
    dialect: keys.db.dialect
});

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