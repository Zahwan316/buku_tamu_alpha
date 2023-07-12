const express = require("express");
const router = express.Router();
const Kunjungan = require("../model/kunjungan");
const {v4:uuidv4} = require("uuid");

const uuid = uuidv4()


router.route("/kunjungan")
    //Ambil Data Kunjungan
    .get(async(req,res) => {
        try{
            const dataKunjungan = await Kunjungan.findAll();
            res.status(200).json({
                message:"Data berhasil diambil",
                data:dataKunjungan
            })
        }
        catch(e){
            res.status(400).json(
                {
                    message:e.message
                }
            )
        }
    })

    //Tambah Data Kunjungan
    .post(async(req,res) => {
        try{
            const dataSend = await Kunjungan.create(
                {
                    id_kunjungan:uuidv4(),
                    id_pendaftaran:uuidv4(),
                    id_ruangan:uuidv4(),
                    id_staff:uuidv4(),
                    priority:req.body.priority
                }
            )
            res.status(200).json(
                {
                    message:"Data Berhasil Ditambahkan",
                    data:dataSend
                }
            )
        }
        catch(e) {
            res.status(400).json(
                {
                   message:e.message
                }
            )
        }
    })

router.route("/kunjungan/:id")
    .put((req,res) => {

    })
    .delete((req,res) => {

    })
    .get((req,res) => {
        
    })


module.exports = router