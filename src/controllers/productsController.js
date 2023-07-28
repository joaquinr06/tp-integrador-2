const products = require('../data/products.json')



const controller = {
    crear: (req, res) => {
        res.json('crear un producto');
    },
    listar: (req, res) => {
        res.json(products);
    },
    detalle: (req, res) => {
        res.json('detalle de un producto');
    }
}