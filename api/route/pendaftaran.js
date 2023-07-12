const express = require("express");
const router = express.Router();
const Pendaftaran = require("../model/pendaftaran");
const {v4:uuidv4} = require("uuid");
const shortid = require("shortid");
const randtoken = require("rand-token")

router.route("/pendaftaran")

     //ambil 2 data
    .get(async(req,res) => {
           try{
                const allData = await Pendaftaran.findAll();

                if(allData){
                    res.status(200).json({
                        message:"Data Berhasil Diambil",
                        data:allData,
                        method:req.method
                    })
                }
                else{
                    res.status(404).json({
                        message:"Data Tidak Ditemukan",
                        method:req.method
                    })
                }
           }
           catch(e){
                res.status(200).json({
                    message:e.message,
                    req:req.method
                })
           }
    })

   

    //tambah data
    .post(async(req,res) => {
        try{
            const createData = await Pendaftaran.create({
                id_pendaftaran:uuidv4(),
                nama:req.body.nama,
                id_tamu:shortid.generate(),
                tanggal_mulai:req.body.tanggal_mulai,
                //tanggal_selesai
                keterangan:req.body.tujuan,
                domisili:req.body.domisili,
                kode_referal :randtoken.generate(10),
                total_anggota:Math.floor(Math.random() * 10),
                id_tujuan_janji:shortid.generate()

            })

            res.status(200).json(
                {
                    message:"Data berhasil ditambahkan",
                    data:createData,
                    method:req.method
                }
            )
        }
        catch(e){
            res.status(400).json(
                {
                    message:e.message,
                    method:req.method
                }
            )
        }
    })

    router.route("/pendaftaran/deleteall")
        .delete(async(req,res) => {
            try{
                await Pendaftaran.destroy({
                    where:{}
                });     
                    res.status(200).json(
                        {
                            message:"Semua data berhasil dihapus",
                            method:req.method
                        }
                        )
                }
                catch(e){
                    res.status(400).json(
                        {
                            message:e.message,
                            method:req.method
                        }
                    )
                }
        })
        
router.route("/pendaftaran/:id")
    .delete((req,res) => {

    })
    .put((req,res) => {

    })


router.route("/pendaftaran/limit2")
     //data untuk dashboard
     .get(async(req,res) => {
        try{
            const allData = await Pendaftaran.findAll({limit:2});

            if(allData){
                res.status(200).json({
                    message:"Data Berhasil Diambil",
                    data:allData,
                    method:req.method
                })
            }
             else{
                 res.status(404).json({
                     message:"Data Tidak Ditemukan",
                     method:req.method
                 })
             }
        }
        catch(e){
             res.status(200).json({
                 message:e.message,
                 req:req.method
             })
        }
 })

module.exports = router