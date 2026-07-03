const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'veyda',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'unicryptopay',
  port: Number(process.env.DB_PORT || 5432),
  max: 10
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
    const client = await pool.connect();
    client.release();
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
    database: 'postgresql',
    dbConnected,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/vendors', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, category, location FROM vendors ORDER BY id LIMIT 20');
    const rows = result.rows;
    if (!rows || rows.length === 0) {
      return res.json(sampleVendors);
    }
    res.json(rows);
  } catch (error) {
    console.error('PostgreSQL vendor fetch failed:', error.message || error);
    res.json(sampleVendors);
  }
});

app.listen(PORT, () => {
  console.log(`UniCryptoPay backend listening on http://localhost:${PORT}`);
});
