const fs = require("fs");
const express = require("express");
const path = require("path");
// sets up port - heroku chooses first else port 3001
const PORT = process.env.PORT || 3001;
// express setup
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.listen(PORT, () =>
  console.log(`App listening on port http://localhost:${PORT}`)
);
