# UniCryptoPay Backend

This backend provides a lightweight Express API for the UniCryptoPay frontend. It is designed to connect to a PostgreSQL database for vendor and transaction data.

## Setup

From the `backend` folder:

```bash
npm install
```

Create a `.env` file in `backend/` with your database settings:

```bash
DB_HOST=localhost
DB_USER=Veyda
DB_PASSWORD=admin14868
DB_NAME=unicryptopay
DB_PORT=5432
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

Use `psql` to initialize PostgreSQL with `schema.sql`:

```bash
psql -U postgres -f schema.sql
```

If your PostgreSQL instance uses a different superuser or host, update the command accordingly.
