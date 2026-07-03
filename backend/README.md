# UniCryptoPay Backend

This backend provides a simple Express API for the UniCryptoPay frontend, backed by PostgreSQL.

## Setup

From the `backend` folder:

```bash
npm install
```

Create a `.env` file in `backend/` with your database settings:

```bash
DB_HOST=localhost
DB_USER=veyda
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

Initialize PostgreSQL with the schema:

```bash
psql -U postgres -d unicryptopay -f schema.sql
```

If needed, create the database and superuser first:

```bash
sudo -u postgres psql -c "CREATE ROLE veyda WITH LOGIN SUPERUSER PASSWORD 'admin14868';"
sudo -u postgres psql -c "CREATE DATABASE unicryptopay OWNER veyda;"
```
