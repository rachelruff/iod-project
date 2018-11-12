const functions = require('firebase-functions');
const cors = require('cors');
const { json } = require('body-parser');
const express = require('express');
const massive = require("massive");

const port = 3001;

const app = express();

app.use(cors({ origin: true }));
app.use(json());

const {
  
  CONNECTION_STRING,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET
} = process.env;



app.get('/api/tester', (req, res) => {res.send('You hit my endpoint!')})

 
const port = 3001;

app.listen(port || 3001, () => {
  console.log(`App listening on port ${port || 3001}!`);
});

exports.app = functions.https.onRequest(app);