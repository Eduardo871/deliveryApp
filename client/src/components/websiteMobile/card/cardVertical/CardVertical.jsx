import React from "react";
import {Link} from "react-router-dom"
import "./CardVertical.css";
import { useDispatch, useSelector } from "react-redux";
import { postCardDetail } from "../../../../redux/action/cardDetails";
import { postCart } from "../../../../redux/action/cartGet";

const CardVertical = ({product})=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(postCardDetail(product))    
    }
    // función para agregar un producto al carrito 
    const handleClickAddToCart = ()=>{
        //dispacha una acción para poder agregar un item al carrito
        dispatch(postCart({userId: 1, productId:product.id, quantity:1}))
    };

    return (
        <div className="cardVerticalContainer">
            <Link to="/cardDetails" onClick={handleClick}className="imageAndReview">
                <img src={product.img} alt="" />
            </Link>
            <div className="titleAndSubtitle">
                <h1>{product.name}</h1>
            </div>
            <div className="priceAndIconAdd">
                <span>${product.price}</span>
                <Link to="/cart"><button className="add" onClick={handleClickAddToCart}><i class="fas fa-plus"></i></button></Link>
            </div>
        </div>
    )
}
export default CardVertical;