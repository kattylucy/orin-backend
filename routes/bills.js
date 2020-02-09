const express = require('express');
const bodyParser = require('body-parser');

const bills = express.Router();
bills.use(bodyParser.json());

bills.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('all user bills will be send to you');
})
.post((req, res) => {
    res.end(`add bills to the user profile`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bills');
})
.delete((req, res) => {
    res.end('Deleting all bills');
});

bills.route('/:billsId')
.get((req, res) => {
    res.end(`Send bills number ${req.params.billsId} details`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /bills/${req.params.billsId}`);
})
.put((req, res) => {
    res.write(`Updating the bills: ${req.params.billsId}\n`);
    res.end(`Will update the bills: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting bills: ${req.params.billsId}`);
});

module.exports = bills;
