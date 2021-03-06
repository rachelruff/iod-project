const functions = require("firebase-functions");
const cors = require("cors");
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");

const mainCtrl = require("./controllers/mainCtrl");

const port = 3001;

const app = express();

app.use(cors({ origin: true }));
app.use(json());

const secrets = require("./secrets.js");

massive(secrets.connectionString)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log, "*******");

app.get("/api/tester", (req, res) => {
  res.send("You hit my endpoint!");
});

app.get("/api/getAllEmployees", mainCtrl.getAllEmployees);
app.get('/api/getEmployee/:id', mainCtrl.getEmployee);
app.post("/api/addEmployee", mainCtrl.addEmployee);
app.delete("/api/deleteEmployee/:id", mainCtrl.deleteEmployee);
app.put("/api/updateEmployee/:id", mainCtrl.updateEmployee)

app.listen(port || 3001, () => {
  console.log(`App listening on port ${port || 3001}!`);
});

exports.app = functions.https.onRequest(app);
