
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const income = require('./routes/income');
const expenses = require('./routes/expenses');
const savings = require('./routes/savings');
const bills = require('./routes/bills');





const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/income', income);
app.use('/savings', savings);
app.use('/bills', bills);
app.use('/expenses', expenses);


// app.use((req, res) => {
//     console.log(req.headers)
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>This is an Express Server</h1></body></html>');
// });

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});