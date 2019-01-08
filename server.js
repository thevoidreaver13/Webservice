const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'dist/Webservice')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./server/api.js'));

app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

const server = app.listen(8081, function () {
    const port = server.address().port;
    console.log("Server is running... at port: %s", port);
})