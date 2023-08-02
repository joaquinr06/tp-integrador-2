let express = require('express');
let app = express();
let home = require('./routes/homeRoute');
let productRouter = require('./routes/productsRoute');


app.use('/', home);
app.use('/listar', productRouter);
app.use('/crear', productRouter);
app.use('/detalle', productRouter);
app.use('/producto/:id', productRouter);





app.listen(3000,() => console.log('Server andando joya'));