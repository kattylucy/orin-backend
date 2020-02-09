const express = require('express');
const bodyParser = require('body-parser');

const savings = express.Router();
savings.use(bodyParser.json());

savings.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('all user savings will be send to you');
})
.post((req, res) => {
    res.end(`add savings to the user profile`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /savings');
})
.delete((req, res) => {
    res.end('Deleting all savings');
});

savings.route('/:savingsId')
.get((req, res) => {
    res.end(`Send savings number ${req.params.savingsId} details`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /savings/${req.params.savingsId}`);
})
.put((req, res) => {
    res.write(`Updating the savings: ${req.params.savingsId}\n`);
    res.end(`Will update the savings: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting savings: ${req.params.savingsId}`);
});

module.exports = savings;
