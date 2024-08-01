const express = require('express');
const app = express();
const port = 5000; // You can choose any port

function greet() {
    return "Hello world";
}


app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.get("/api/data", (req, res) => {
    var x = greet()
    res.json({ message: x });
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
