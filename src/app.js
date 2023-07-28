let express = require('express');
let app = express();
let home = require('./routes/home')

app.use('/', home)

app.listen(3000,() => console.log('Server andando joya'));