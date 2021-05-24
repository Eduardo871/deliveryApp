
const server = require("express").Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Product, User, OrderLine, Cart } = require("../db.js");

// agregar un producto al carrito

server.post("/",  async(req,res, next)=>{
    const {userId, productId, quantity}  = req.body;
    console.log(userId)
    const cart = await  Cart.findOrCreate({where:{userId:userId, status:"cart"}});
    const product = await Product.findByPk(productId);
    if (cart && product){
        const cartId = cart[0].id;
        const subTotal = Number(product.price) * Number(quantity);
        const orderLine = await OrderLine.findOrCreate({where:{productId, quantity, cartId,subTotal}})
        if(orderLine){
            const cartNew = await Cart.findByPk(cartId, {include:{model:Product}});
            let total= 0; 
            cartNew.products.map(p =>{  total += Number(p.orderLine.subTotal)})
            cartNew.update({total}).then(
                (cart)=> res.send(cart),
                ()=> res.status(400).send("The product was not added to the cart")
            )
        }
    }else{
        res.status(400).send("The product was not added to the cart");
    }
    
})

// modificar status de un cart un producto del carrito 

server.put("/", async (req, res) => {
    const {total, status, cartId}= req.body;
    const cart = await Cart.findByPk(cartId)
    cart.update({total, status})
    .then(
        ()=>{res.send("Modified cart")},
        ()=>{res.send("Unmodified cart")}
    )
}); 

// ruta para eliminar productos de un carrito 

server.delete("/", async(req, res)=>{
    const {productId, cartId}= req.query;
    console.log(productId)
    const orderLine = await OrderLine.findOne({where:{productId:productId, cartId:cartId}})
    orderLine.destroy()
    .then(
        ()=>{
            Cart.findByPk(cartId,{include:{model:Product}}).then(
                (cart)=>  res.send(cart),
                ()=>{res.status.send("Product not removed")}
            )
           
        },
        ()=>{res.status.send("Product not removed")}
    )

});

// ruta  para modificar el quantity de un carrito

server.put("/quantity", async(req, res)=>{
    const {productId, cartId, quantity, subTotal}= req.body;
    const orderLine = await OrderLine.findOne({where:{productId, cartId}})
    const product = await Product.findByPk(productId, {include:{model:Cart}})
    orderLine.update({quantity, subTotal})
    .then(
        ()=>{
            Cart.findByPk(cartId,{include:{model:Product}})
            .then(
                (cart)=>{
                    let total = 0;
                    cart.products.map(p =>{ total += Number(p.orderLine.subTotal)});
                    cart.update({total})
                    res.send(cart)
                },
                ()=>{res.status.send("Unmodified quantity")}   
            )
            
        },
        ()=>{res.status.send("Unmodified quantity")}
    )
});
module.exports = server;
