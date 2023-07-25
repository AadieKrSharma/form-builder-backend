import express from "express";

var app = express();

app.get("/", function (req, res) {
  res.status(201).json("Welocme to Form-Builder-Backend!");
});

const port = 5000;
app.listen(port, ()=>{
    console.log(`Server connected to https://localhost:${port}`);
});
