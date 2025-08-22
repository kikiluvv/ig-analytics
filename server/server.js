// server.js
import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";
import apiRoutes from './routes/index.js';

const app = express();
const PORT = 5000;

app.use(cors());

// chained scraper endpoint
// server.js
app.use("/api", apiRoutes)

app.get("/", async (req, res) => {
    try {
        // launch chromium in "headless" mode with Render-safe flags
        const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.goto("https://example.com", { waitUntil: "networkidle2" });

        // grab the page title as proof it loaded
        const title = await page.title();

        await browser.close();

        res.send(`✅ Puppeteer is alive! Page title was: <b>${title}</b>`);
    } catch (err) {
        console.error(err);
        res.status(500).send("❌ Puppeteer launch failed: " + err.message);
    }
});


app.listen(PORT, () =>
    console.log(`🚀 Proxy server running at http://localhost:${PORT}`)
);
