const express = require("express");
const { handleGenerateNewShortUrl, handleGetAnalytics, handleNewShortUrl } = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleNewShortUrl);
router.get("/url/analytics/:shortId", handleGetAnalytics);

module.exports = router;