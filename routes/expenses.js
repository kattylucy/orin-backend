const express = require('express');
const bodyParser = require('body-parser');

const expenses = express.Router();
expenses.use(bodyParser.json());

expenses.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('all user expenses will be send to you');
})
.post((req, res) => {
    res.end(`add expenses to the user profile`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /expenses');
})
.delete((req, res) => {
    res.end('Deleting all expenses');
});

expenses.route('/:expensesId')
.get((req, res) => {
    res.end(`Send expenses number ${req.params.expensesId} details`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /expenses/${req.params.expensesId}`);
})
.put((req, res) => {
    res.write(`Updating the expenses: ${req.params.expensesId}\n`);
    res.end(`Will update the expenses: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting expenses: ${req.params.expensesId}`);
});

module.exports = expenses;
