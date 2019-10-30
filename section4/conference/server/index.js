const express = require('express');
const path = require('path');
const app = express();

// When using express template PUG
app.set('view engine', 'pug');

if(app.get('env') === 'development') {
    // To view nicely in the brownser Ctrl + U
    app.locals.pretty = true;
}
app.set('views', path.join(__dirname, './views'));

const routes = require('./routes');

// if you want to use file call it static
app.use(express.static('public'));

app.get('/favicon.ico', (req,res,next) => {
    return res.sendStatus(204);
});

app.use('/', routes());

app.listen(3000);

module.export = app;