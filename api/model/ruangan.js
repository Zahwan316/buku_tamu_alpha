const sequelize = require("../config");
const {DataTypes} = require("sequelize");

const Ruangan = sequelize.define("ruangan",{
    id_ruangan:{
        type:DataTypes.UUID,
        primaryKey:true,
        allowNull:false
    },
    nama:{
        type:DataTypes.STRING,
        allowNull:true
    },
    id_staff:{
        type:DataTypes.STRING,
        allowNull:true
    },
    id_bagian:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:true
    },
    updatedAt:{
       type:DataTypes.DATE,
       allowNull:true
    }
},{schema:"public"});

module.exports = Ruangan;