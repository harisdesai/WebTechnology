const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.get('/contact', (req, res) => {
    res.send("Contact us at example@gmail.com");
});

app.get('/feedback', (req, res) => {
    res.send("You can provide feedback here");
});

app.get('/pricing', (req, res) => {
    res.send("You can check the Pricing here");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/about`)
})