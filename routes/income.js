const express = require('express');
const bodyParser = require('body-parser');

const income = express.Router();
income.use(bodyParser.json());

income.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('all user income will be send to you');
})
.post((req, res) => {
    res.end(`add income to the user profile`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /income');
})
.delete((req, res) => {
    res.end('Deleting all income');
});

income.route('/:incomeId')
.get((req, res) => {
    res.end(`Send income number ${req.params.incomeId} details`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /income/${req.params.incomeId}`);
})
.put((req, res) => {
    res.write(`Updating the income: ${req.params.incomeId}\n`);
    res.end(`Will update the income: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting income: ${req.params.incomeId}`);
});

module.exports = income;
