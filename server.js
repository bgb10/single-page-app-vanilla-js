const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html")); //spa기 때문에 어떤 요청이든 index.html로 오도록 해야함.
});

app.listen(process.env.PORT || 8080, () => console.log("Server running..."));