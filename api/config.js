const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("testdb","postgres","23456789",{
    host:"localhost",
    port:5432,
    dialect:"postgres"
})

sequelize.authenticate()
    .then(() => console.log("database connected"))
    .catch(e => console.log(e.message))

const createTable = async() => {
    try{
        await sequelize.sync({force:true});
        console.log("all table created")
    }
    catch(e){
        console.log(e.message)
    }
}

//createTable();

module.exports = sequelize;