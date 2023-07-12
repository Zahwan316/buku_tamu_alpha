const express = require("express");
const app = express();
const port = 3100;
const sequelize = require("./config")
const Kunjungan = require("./model/kunjungan");
const kunjungan_route = require("./route/kunjungan");
const pendaftaran_route = require("./route/pendaftaran")
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res) => {
    res.send("test index");
})

app.use(kunjungan_route)
app.use(pendaftaran_route);


app.listen(port,() => {
    console.log(`listening at  localhost:${port}`)
})

