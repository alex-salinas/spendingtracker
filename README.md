# Spending Tracker

A minimal React web app for tracking expenses and income and visualizing the balance with Highcharts. This project avoids package installation by relying on [esm.sh](https://esm.sh/) CDNs for React and Highcharts.
The UI now includes simple styling to look closer to a native app.

## Getting Started
Install dependencies and start the server:

```bash
npm install
npm start
```

The server serves the static React app from the `public` folder and exposes an API at `/api/transactions` backed by MongoDB. Provide a `MONGODB_URI` environment variable or run a local MongoDB instance.

## Development
Transactions are stored in MongoDB via a small Express server located in `server.js`. The front‑end communicates with this API to fetch and add transactions.
