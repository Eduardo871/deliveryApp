
const server = require("express").Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Product, User } = require("../db.js");


// ruta para crear a un producto
server.post("/", (req, res)=>{
    const {product} = req.body;
    Product.create(product)
    .then(
        ()=>{
            Product.findAll()
            .then(
                (resp)=>{res.send(resp)},
                (err)=> res.status(404).send("the product was not created correctly")
            )
        },
        ()=>{res.status(404).send("the product was not created correctly")}
    )
})

// ruta para traer todos los productos según su type 

server.get("/", (req, res)=>{
    const {type} = req.query;
    Product.findAll({where:{type}})
    .then(
        (resp)=>{
            res.send(resp)
        },
        ()=>{
            res.status(404).send("Product not found")
        }
    )
});

// ruta para eliminar un producto
server.delete("/", async(req,res)=>{
    const {productId}= req.body;
    const product = await Product.findByPk(productId)
    product !== null && product.destroy()
    .then(
        ()=>{ 
            Product.findAll()
            .then(
                (resp)=>{res.send(resp)},
                (err)=> res.status(404).send("Product not removed")
            )
        },
        ()=>{res.status(400).send("Product not removed")}
    ) 
    product === null && res.status(400).send("Product not removed")
})

// ruta para buscar productos por su name 

server.get("/searchProduct", (req,res)=>{
    const {name} = req.query;
    Product.findAll({where:{name:{[Op.iLike]: `%${name}%`}}})
    .then(
        (product)=>{res.send(product)},
        ()=>{res.send("Product not found")}
    )
});

module.exports = server;