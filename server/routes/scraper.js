// routes/scraper.js
import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/:username", async (req, res) => {
    const { username } = req.params;
    const logs = []; // collect logs to send back
    const pushLog = (msg, type = "log") => {
        logs.push(msg);
        if (type === "warn") console.warn(msg);
        else if (type === "error") console.error(msg);
        else console.log(msg);
    };

    pushLog(`🔍 Starting scrape for username: ${username}`);

    const urls = [
        `https://www.instagram.com/${username}/?__a=1&__d=dis`,
        `https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
        `https://www.instagram.com/${username}/`,
    ];

    let lastError = null;

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        pushLog(`➡️ [${i + 1}/${urls.length}] Trying URL: ${url}`);

        try {
            const response = await fetch(url, {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/92 Safari/537.36",
                },
            });

            pushLog(`📡 Response status for ${url}: ${response.status}`);

            if (!response.ok) {
                pushLog(
                    `⚠️ Request failed for ${url} with status ${response.status}`,
                    "warn"
                );
                lastError = `Failed at ${url} with status ${response.status}`;
                continue;
            }

            const text = await response.text();

            try {
                const json = JSON.parse(text);
                pushLog(`✅ Parsed JSON from ${url}`);

                const user =
                    json?.graphql?.user ||
                    json?.data?.user ||
                    json?.user ||
                    null;

                if (user) {
                    pushLog(`🎉 Success! Extracted user object from ${url}`);
                    return res.json({ success: true, url, user, logs });
                } else {
                    pushLog(
                        `⚠️ JSON parsed but no valid user object found at ${url}`,
                        "warn"
                    );
                    lastError = `No user object found at ${url}`;
                }
            } catch (parseErr) {
                pushLog(
                    `❌ Failed to parse JSON from ${url}. Probably HTML. ${parseErr.message}`,
                    "error"
                );
                lastError = `Invalid JSON at ${url}`;
            }
        } catch (err) {
            pushLog(`🔥 Network error at ${url}: ${err.message}`, "error");
            lastError = err.message;
        }
    }

    pushLog(`💀 All endpoints failed for ${username}`, "error");

    res.status(500).json({
        success: false,
        error: "All endpoints failed :(",
        lastError,
        logs,
    });
});

export default router;
