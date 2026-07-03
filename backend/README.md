# UniCryptoPay Backend

This backend provides a lightweight Express API for the UniCryptoPay frontend. It is designed to connect to a MySQL database for vendor and transaction data.

## Setup

From the `backend` folder:

```bash
npm install
```

Create a `.env` file in `backend/` with your database settings:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=unicryptopay
PORT=3000
```

Start the server:

```bash
npm start
```

## API

- `GET /api/status` - backend health check
- `GET /api/vendors` - returns a list of campus vendors

## Database

Execute `schema.sql` to create the sample database and vendor table.
