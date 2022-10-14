const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/twiliosms", async (req, res) => {
  const { phoneNumber, data } = req.body;

  const accountSid = process.env.TWILIO_ACC_SID;
  const authToken = process.env.TWILIO_AUTHTOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: `Hey user, this message is send from Narrow-Links here is the link you shared to your number right now : \n ${data}`,
      from: process.env.TWILIO_NUMBER,
      to: `+91${phoneNumber}`,
    })
    .then((message) => console.log(message.sid));

  res.json({ success: "Message send successfully" });
});

module.exports = router;
