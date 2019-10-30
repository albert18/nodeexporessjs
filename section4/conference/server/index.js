const express = require('express');
const app = express();

const routes = require('./routes');

// if you want to use file call it static
app.use(express.static('public'));

app.get('/favicon.ico', (req,res,next) => {
    return res.sendStatus(204);
});

app.use('/', routes());

app.listen(3000);

module.export = app;