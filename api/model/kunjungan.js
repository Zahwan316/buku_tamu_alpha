const sequelize = require("../config");
const {DataTypes}  = require("sequelize")

const Kunjungan = sequelize.define("kunjungan",{
    id_kunjungan:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false
    },
    id_pendaftaran:{
        type:DataTypes.STRING,
        allowNull:true
    },
    id_ruangan:{
        type:DataTypes.STRING,
        allowNull:true
    },
    id_staff:{
        type:DataTypes.STRING,
        allowNull:true
    },
    priority:{
        type:DataTypes.INTEGER,
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
},{schema:"public"})

module.exports = Kunjungan;