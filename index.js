const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const db = require('./config.js');
const response = require('./response.js');

app.use(bodyParser.json());

// Endpoint for 'kategori_pakaian' table
app.get('/kategori', (req, res) => {
    const sql = 'SELECT * FROM kategori_pakaian';
    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Gagal mengambil data kategori." });
        } else {
            response(200, result, 'data kategori_pakaian', res);
        }
    });
});

app.post('/kategori', (req, res) => {
    const { nama_kategori } = req.body;
    const values = { nama_kategori };

    db.query('INSERT INTO kategori_pakaian SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Gagal menambahkan data kategori." });
        } else {
            res.json({ success: true, message: "Data berhasil ditambahkan." });
        }
    });
});

// Endpoint for 'produk_pakaian' table
app.get('/produk', (req, res) => {
    const sql = 'SELECT * FROM produk_pakaian';
    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Gagal mengambil data produk." });
        } else {
            response(200, result, 'data produk_pakaian', res);
        }
    });
});

app.post('/produk', (req, res) => {
    const { nama_produk, id_kategori, harga, stok } = req.body;
    const values = { nama_produk, id_kategori, harga, stok };

    db.query('INSERT INTO produk_pakaian SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Gagal menambahkan data produk." });
        } else {
            res.json({ success: true, message: "Data berhasil ditambahkan." });
        }
    });
});

// Endpoint for 'pesanan_pakaian' table
app.get('/pesanan', (req, res) => {
    const sql = 'SELECT * FROM pesanan_pakaian';
    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Gagal mengambil data pesanan." });
        } else {
            response(200, result, 'data pesanan_pakaian', res);
        }
    });
});

app.post('/pesanan', (req, res) => {
    const { id_produk, id_pelanggan, tanggal_pesanan, total_harga } = req.body;
    const values = { id_produk, id_pelanggan, tanggal_pesanan, total_harga };

    db.query('INSERT INTO pesanan_pakaian SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Gagal menambahkan data pesanan." });
        } else {
            res.json({ success: true, message: "Data berhasil ditambahkan." });
        }
    });
});

// Endpoint for 'pelanggan_pakaian' table
app.get('/pelanggan', (req, res) => {
    const sql = 'SELECT * FROM pelanggan_pakaian';
    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Gagal mengambil data pelanggan." });
        } else {
            response(200, result, 'data pelanggan_pakaian', res);
        }
    });
});

app.post('/pelanggan', (req, res) => {
    const { nama_pelanggan, alamat, telepon } = req.body;
    const values = { nama_pelanggan, alamat, telepon };

    db.query('INSERT INTO pelanggan_pakaian SET ?', values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Gagal menambahkan data pelanggan." });
        } else {
            res.json({ success: true, message: "Data berhasil ditambahkan." });
        }
    });
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
