## Run the app

### Backend

From the repository root:

```bash
cd backend
npm install
npm start
```

This starts the backend API on `http://localhost:3000`.

### Frontend

In a second terminal:

```bash
cd frontend
npm install
npm start
```

Then open `http://localhost:4200/`.

## Docker Postgres (optional)

If you want to run Postgres in Docker instead of installing it locally:

```bash
docker run --rm -d --name unicryptopay-postgres \
  -e POSTGRES_USER=veyda \
  -e POSTGRES_PASSWORD=admin14868 \
  -e POSTGRES_DB=unicryptopay \
  -p 5432:5432 postgres:16
```

## API Endpoints

- `GET http://localhost:3000/api/status`
- `GET http://localhost:3000/api/vendors`

## Notes

- The backend reads database configuration from `backend/.env`.
- Frontend and backend are started separately.
