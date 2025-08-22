import express from "express";
import scraperRoutes from "./scraper.js";   
import storyRoutes from "./anonStory.js";

const router = express.Router();

// root (optional)
router.get("/", (req, res) => {
    res.send("API is alive 🌐");
});

// mount other routers
router.use("/scrape", scraperRoutes);
router.use("/stories", storyRoutes);

export default router;
