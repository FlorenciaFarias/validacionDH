const { resolve } = require('path');
const express = require('express');
const app = express();
const port = 3000;

const public = require('./src/modules/public');

app.listen(port, () => 
    console.log(`Server: ${port}!`)
);

app.set('views', resolve(__dirname, 'views'));
app.search('view engine', 'ejs');

app.use(public);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(method('method'));

app.use('/', require('./src/routes/mainRouter'));
app.use('/users', require('./src/routes/usersRouter'));