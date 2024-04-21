const pg = require('pg')

const con = new pg.Client({
    host:"localhost",
    user:"postgres",
    password:"Romel@12",
    database:"todolistpostgres",
    port:5432
})

con.connect(function(err){
    if(err){
        console.log("Database not connected...")
    }
    else {
        console.log("Database is connected...")
    }
})

module.exports = con