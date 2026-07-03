# UniCryptoPay

UniCryptoPay is a proposal for a campus payment platform that lets students and staff make fast, low-friction transactions using cryptocurrency while keeping the experience simple and familiar.

## Problem Statement

Campus payments often involve fragmented systems, delayed settlement, and limited support for digital-native users. UniCryptoPay aims to simplify campus transactions by providing a secure, student-friendly payment experience that can support tuition-related charges, campus services, and everyday purchases through a modern web interface.

## Project Structure

- Frontend: Angular app in [frontend](frontend)
- Documentation: proposal and planning materials in [frontend/public/docs](frontend/public/docs)

## Run the App

From the repository root:

```bash
cd frontend
npm install
npm start
```

Then open http://localhost:4200/ in your browser.

## Test the App

Run the current frontend test suite with:

```bash
cd frontend
npm test -- --watch=false
```

The current test setup is working through the Angular/Vitest runner, but the sample test file may need adjustment if you want all tests to pass cleanly in this environment.
