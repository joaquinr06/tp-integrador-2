let express = require('express');
let app = express();
let home = require('./routes/home')
let product = require('./controllers/productsController')

app.use('/', home)
app.use('/listar', product.listar)
app.use('/crear', product.crear)
app.use('/detalle', product.detalle)
app.use('/producto/:id', product.id)




app.listen(3000,() => console.log('Server andando joya'));