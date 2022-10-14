const express = require("express");
const router = express.Router();
const Url = require("../models/Url");

const host = "http://localhost:5000/";

router.get("/:shortUrl", async (req, res) => {
  const url = await Url.findOne({ shortUrl: req.params.shortUrl });
  if (url) {
    const shortUrl = host + url.shortUrl;

    console.log(shortUrl);
    const updatedUrl = new Url({
      originalUrl: url.originalUrl,
      shortUrl: shortUrl,
    });

    updatedUrl.save();

    res.redirect(url.originalUrl);
    // res.json({newUrl});

    return;
  } else {
    return res
      .status(404)
      .json({
        error: "The shortUrl does not exist alredy please try again !!",
      });
  }
});

module.exports = router;
