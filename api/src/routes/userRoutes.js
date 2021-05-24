
const server = require("express").Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Product, User, Review } = require("../db.js");


// ruta para crear a un usuario
server.post("/", (req, res)=>{
    const {user} = req.body;
    User.create(user)
    .then(
        ()=>{res.send("the user has been created successfully")},
        ()=>{res.status(404).send("the user was not created correctly")}
    )
})

// ruta para crear una review
// server.post("/review", (req, res)=>{
//     const {userId, productId, calification, description} = req.body;

//     Review.create({userId, productId, calification, description})
//     .then(
//         ()=> {res.send("Review created")},
//         ()=>{res.status(400).send("Review not created")}
//     )
// });


module.exports = server;