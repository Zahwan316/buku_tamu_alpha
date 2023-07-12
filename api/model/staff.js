const sequelize = require("../config");
const {DataTypes} = require("sequelize");

const Staff = sequelize.define("staff",{
    id_staff:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
    },
    nama:{
        type:DataTypes.STRING,
        allowNull:true
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:true
    },
    updatedAt:{
       type:DataTypes.DATE,
       allowNull:true
    }
})