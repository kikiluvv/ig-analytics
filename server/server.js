// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import apiRoutes from './routes/index.js';

const app = express();
const PORT = 5000;

app.use(cors());

// chained scraper endpoint
// server.js
app.use("/api", apiRoutes)


app.listen(PORT, () =>
    console.log(`🚀 Proxy server running at http://localhost:${PORT}`)
);
