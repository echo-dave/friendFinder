//define and include dependencies
const express = require('express');


//Start express sever
const app = express();
const PORT = process.env.PORT || 8080;

//data parsers
//handle data parsing
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
app.use(express.static('public', options));

//routing
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//404 not found routing
app.use(function (req, res) {
    res.status(404).sendFile(__dirname + "/public/404.html");
});


//start server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});