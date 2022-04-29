const fs = require("fs");
const express = require("express");
const path = require("path");
// sets up port - heroku chooses first else port 3001
const PORT = process.env.PORT || 3001;
// express setup
const app = express();
// connects js file
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// connects notes html doc
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
// routes to db.json
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});
// route to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// LAST - listens to the port
app.listen(PORT, () =>
  console.log(`App listening on port http://localhost:${PORT}`)
);
