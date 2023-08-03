let express = require('express');
let app = express();
let home = require('./routes/homeRoute');
let product = require('./routes/productsRoute');

app.use('/', home);
app.use('/listar', home);
app.use('/detalle', product);
app.use('/crear', product);
app.use('/product/:id', product);


app.listen(3000,() => console.log('Server andando joya'));