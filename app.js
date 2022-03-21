const express = require("express");
const app = express();
const port = 5000;
app.use(express.json({ limit: "100mb" }));
// var router = express.Router();

app.get("/", function (req, res) {
  res.json({ error: false, message: "Hello !" });
});

app.post('/add', (req, res) => {
    res.status(201).json({"error":false, "data": (req.body.num1 + req.body.num2)})
})

app.get('/other', (req, res) => {
    res.status(404).json({"error": true, "message": "Page not found!"});
})
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
