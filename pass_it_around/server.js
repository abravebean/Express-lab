const express = require('express');
const app = express();
PORT = 2000

//Routes
app.get('/', (req, res) => {
    res.send(`
    <h1>99 Bottles of non-alcoholic beverages on the wall</h1>
    <a href='/98'>take one down, pass it around</a>
    `);
});

app.get('/:number_of_bottles', (req, res) => {
    res.send(`
    <h1>${req.params.number_of_bottles} bottles of non-alcoholic beverages on the wall</h1>
    <a href='/${req.params.number_of_bottles - 1}'>take one down, pass it around</a>
    `)
});

// Listen
app.listen(PORT, () => {
    console.log('Port:', PORT);
})