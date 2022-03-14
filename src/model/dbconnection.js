const mysql = require("mysql2");
require('dotenv').config({path: '.env'})

const dbconnection = mysql.createConnection({
    host: process.env._HOST,
    user: process.env._USERNAME,
    password: process.env._PASSWORD,
    database: process.env._DATABASE,
    port: process.env._PORT
})

dbconnection.connect(function(err){
    if(err){
        console.log("Erro na Base de Dados!")

    }else{
        console.log('Connected to DataBase: ' + process.env._DATABASE);
    }
})

module.exports=dbconnection;