import express from "express";
import http from "http";

const app = express();
app.get("/", (_, res) => {
  res.send("Github Actions");
});

const PORT = process.env.SERVER_PORT || 8007;

http.createServer(app).listen(PORT, () => console.log(`Server running on ${PORT}`));
