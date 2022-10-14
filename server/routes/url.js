const express = require("express");
const router = express.Router();
const Url = require("../models/Url");

router.post("/narrowurl", async (req, res) => {
  const { originalUrl } = req.body;

  const characters = "abcABCDEopqrsFGHIJVWXYZdKLMNOPQRSTUefghijklmntuvwxyz";

  let shortUrl = "";
  for (let i = 0; i < 5; i++) {
    shortUrl += characters.charAt(Math.floor(Math.random() * 10));
  }

  let urlExists = await Url.findOne({ shortUrl });
  if (urlExists) {
    return res
      .status(400)
      .json({
        success,
        error: "Sorry ! A user with the same email exists already",
      });
  }

  const url = new Url({
    originalUrl,
    shortUrl,
  });

  url
    .save()
    .then(() => {
      res.json(url);
      // res.redirect({originalUrl});
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
