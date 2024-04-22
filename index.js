const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const db = require('./config.js')

const response = require('./response.js')

app.use(bodyParser.json())

//tabel_kategori
app.get('/kategori', (req,res)=>{
    const sql = 'SELECT * FROM kategori_pakaian'
    db.query(sql,(error, result)=>{
        response(200,result,'data kategori_pakaian',res)
    })
})
app.post('/kategori', (req, res) => {
    const { id_kategori,nama_kategori } = req.body;
    const values = { id_kategori,nama_kategori};

    db.query('INSERT INTO kategori_pakaian SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menambahkan data produk.");
        } else {
            res.send("Data produk berhasil ditambahkan.");
        }
    });
});

//tabel produk_pakaian
app.get('/pakaian', (req,res)=>{
    const sql = 'SELECT * FROM produk_pakaian'
    db.query(sql,(error, result)=>{
        response(200,result,'data produk_pakaian',res)
    })
})
app.post('/pakaian', (req, res) => {
    const { id_produk, nama_produk, id_kategori,harga,stok } = req.body;
    const values = { id_produk,nama_produk, id_kategori,harga, stok };

    db.query('INSERT INTO produk_pakaian SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menambahkan data produk.");
        } else {
            res.send("Data produk berhasil ditambahkan.");
        }
    });
});

//tabel pesanan_pakaian
app.get('/pesanan', (req,res)=>{
    const sql = 'SELECT * FROM pesanan_pakaian'
    db.query(sql,(error, result)=>{
        response(200,result,'data pesanan_pakaian',res)
    })
})
app.post('/pesanan', (req, res) => {
    const { id_pesanan, id_produk, id_pelanggan,tanggal_pesanan,total_harga } = req.body;
    const values = { id_pesanan, id_produk, id_pelanggan,tanggal_pesanan,total_harga };

    db.query('INSERT INTO pesanan_pakaian SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menambahkan data produk.");
        } else {
            res.send("Data produk berhasil ditambahkan.");
        }
    });
});

//tabel pelanggan_pakaian
app.get('/pelanggan', (req,res)=>{
    const sql = 'SELECT * FROM pelanggan_pakaian'
    db.query(sql,(error, result)=>{
        response(200,result,'data pelanggan_pakaian',res)
    })
})
app.post('/pelanggan', (req, res) => {
    const { id_pelanggan, nama_pelanggan, alamat,telepon} = req.body;
    const values = { id_pelanggan, nama_pelanggan, alamat,telepon };

    db.query('INSERT INTO pelanggan_pakaian SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Gagal menambahkan data produk.");
        } else {
            res.send("Data produk berhasil ditambahkan.");
        }
    });
});

app.listen(port, () => {
    console.log(`Runing in port ${port}`)
})