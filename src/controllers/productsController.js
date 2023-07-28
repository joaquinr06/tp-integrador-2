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
    },
    id: (req, res) =>{
        let id = +req.params.id;
        let producto = products.filter(product => product.id == id);
        res.json(producto);
    }
}

module.exports = controller;