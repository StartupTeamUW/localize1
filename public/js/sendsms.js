// store this in an .env file
const accountSid = 'ACxxxxxxxxx';// process.env.TWILIO_ACCOUNT_SID;
const authToken = 'gfdasdfh';//proccess.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages.create({
    to: process.env.MY_PHONE_NUMBER,
    from: '+2343803048', //this is the purchased number
    body: 'This is the ship that made the Kessel Run in 14 parsecs'
})
.then((message) => console.log(message.sid))
//run node sendsms.js

// INBOUND -create a server.js
const http= require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');
    res.writeHead(200, { 'Content-Type': 'text/xml'});
    res.end(twiml.toString());
})
http.createServer(app).listen(1337, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
})
//run node server.js