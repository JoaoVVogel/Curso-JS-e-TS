const express = require('express');
const app = express();
const routes = require('./router');
const path = require('path');

app.use(express.urlencoded({extendend: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('http://localhost:3000/');
    console.log('http://localhost:3000/teste');
    console.log('online na porta 3000')
});

