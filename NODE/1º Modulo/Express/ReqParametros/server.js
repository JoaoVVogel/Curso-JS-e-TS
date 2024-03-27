const express = require('express');
const app = express();
const routes = require('./router')

app.use(express.urlencoded({extendend: true}));
app.use(routes);

app.listen(3000, () => {
    console.log('http://localhost:3000/');
    console.log('http://localhost:3000/teste');
    console.log('online na porta 3000')
});

