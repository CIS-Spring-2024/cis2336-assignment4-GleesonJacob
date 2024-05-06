const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/order', (req, res) => {
    const wafflesQuantity = parseInt(req.body.wquanity);
    const sandwichQuantity = parseInt(req.body.squanity);
    const pastaQuantity = parseInt(req.body.pquanity);

    // Validate quantities
    if (isNaN(wafflesQuantity) || isNaN(sandwichQuantity) || isNaN(pastaQuantity)) {
        res.status(400).send('Invalid quantities');
        return;
    }

    // Calculate total
    const total = (wafflesQuantity * 3) + (sandwichQuantity * 4) + (pastaQuantity * 6);

    // Send response
    res.send(`Your total is $${total.toFixed(2)}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});