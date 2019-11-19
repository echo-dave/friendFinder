console.log("this is loaded");
exports.db = {
    database: process.env.DB,
    username: process.env.UNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT
};