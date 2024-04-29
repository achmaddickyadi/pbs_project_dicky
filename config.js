const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6702756',
    password: 'gdwGEaas4K',
    database: 'sql6702756'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

db.on('error', (err) => {
    console.error('Database error:', err);
});

module.exports = db;
