import express from "express";

const router = express.Router();

router.get("/:username", async (req, res) => {
    const { username } = req.params;


});

export default router;
