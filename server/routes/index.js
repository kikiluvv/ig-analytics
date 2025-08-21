import express from "express";
import scraperRoutes from "./scraper.js";   // <- your scraper endpoints

const router = express.Router();

// root (optional)
router.get("/", (req, res) => {
    res.send("API is alive 🌐");
});

// mount other routers
router.use("/scrape", scraperRoutes);

export default router;
