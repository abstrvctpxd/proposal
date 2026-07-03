const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'unicryptopay',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

const sampleVendors = [
  { id: 1, name: 'Campus Cafe', category: 'Food', location: 'Student Center' },
  { id: 2, name: 'College Bookstore', category: 'Retail', location: 'Campus Mall' },
  { id: 3, name: 'Campus Gym', category: 'Wellness', location: 'North Building' }
];

async function tryDb() {
  try {
    const conn = await pool.getConnection();
    conn.release();
    return true;
  } catch (error) {
    return false;
  }
}

app.get('/api/status', async (req, res) => {
  const dbConnected = await tryDb();
  res.json({
    status: 'ok',
    backend: 'express',
    dbConnected,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/vendors', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name, category, location FROM vendors LIMIT 20');
    if (!rows || rows.length === 0) {
      return res.json(sampleVendors);
    }

    res.json(rows);
  } catch (error) {
    console.warn('MySQL vendor fetch failed:', error.message || error);
    res.json(sampleVendors);
  }
});

app.listen(PORT, () => {
  console.log(`UniCryptoPay backend listening on http://localhost:${PORT}`);
});
