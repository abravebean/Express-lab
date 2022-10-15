const express = require("express");
const app = express();
 const eightBall =
        ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/greeting", (req, res) => {
    res.send("Hello Stranger!");
});
app.get("/:name?", (req, res) => {
    res.send("Hello " + req.params.name + " it's great to see you");
});

app.get("/tip/:total/:tipPercentage", function (req, res) {
    res.send("your tip is: $" + req.params.total * (req.params.tipPercentage / 100))
    // res.send((req.params.total + req.params.tipPercentage))
});
const randomResponse = eightBall[Math.floor(Math.random() * eightBall.length)];


app.get("/magic/:question", function (req, res) {
    res.send(`${req.params.question} <h1>${randomResponse}</h1>`)
});

app.listen(3000)