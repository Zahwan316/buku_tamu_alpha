const sequelize = require("../config");
const {DataTypes} = require("sequelize");

const Pendaftaran = sequelize.define("pendaftaran",{
    id_pendaftaran:{
        type:DataTypes.UUID,
        primaryKey:true,
        allowNull:false
    },
    nama:{
        type:DataTypes.STRING,
        allowNull:true
    },
    id_tamu:{
        type:DataTypes.STRING,
        allowNull:true
    },
    tanggal_mulai:{
        type:DataTypes.DATE,
        allowNull:true
    },
    tanggal_selesai:{
        type:DataTypes.DATE,
        allowNull:true
    },
    keterangan:{
        type:DataTypes.STRING,
        allowNull:true
    },
    domisili:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    kode_referal:{
        type:DataTypes.STRING,
        allowNull:true
    },
    total_anggota:{
        type:DataTypes.STRING,
        allowNull:true
    },
    id_tujuan_janji:{
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
 
},{schema:"public"})

module.exports = Pendaftaran;
