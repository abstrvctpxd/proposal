# UniCryptoPay

UniCryptoPay is a proposal for a campus payment platform that lets students and staff make fast, low-friction transactions using cryptocurrency while keeping the experience simple and familiar.

## Problem Statement

Campus payments often involve fragmented systems, delayed settlement, and limited support for digital-native users. UniCryptoPay aims to simplify campus transactions by providing a secure, student-friendly payment experience that can support tuition-related charges, campus services, and everyday purchases through a modern web interface.

## Project Structure

- Frontend: Angular app in [frontend](frontend)
- Backend: Express API in [backend](backend)
- Documentation: proposal and planning materials in [frontend/public/docs](frontend/public/docs)

## Run the App

### Backend

From the repository root:

```bash
cd backend
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

Initialize PostgreSQL using:

```bash
psql -U postgres -f schema.sql
```

Then start the backend server:

```bash
npm start
```

### Frontend

In a separate terminal:

```bash
cd frontend
npm install
npm start
```

Open http://localhost:4200/ in your browser.

## API Endpoints

- `GET http://localhost:3000/api/status` — health check
- `GET http://localhost:3000/api/vendors` — vendor list

## Test the App

Run the frontend test suite with:

```bash
cd frontend
npm test -- --watch=false
```

The backend will serve live vendor data if MySQL is configured; otherwise it will return a fallback sample vendor list.
