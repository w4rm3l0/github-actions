import express from "express";
import http from "http";

const app = express();
app.get("/", (_, res) => {
  res.send("Github Actions");
});
http.createServer(app).listen(8007, () => console.log("Server running"));
