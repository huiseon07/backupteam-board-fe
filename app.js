const express = require("express");
const app = express();
const port = 9100;

app.get("/", (req, res) => {
  res.send("기본 홈 페이지");
});

app.listen(port, (req, res) => {
  console.log(port, "서버가 열렸습니다");
});
