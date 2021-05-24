import React from "react";
import "./CardHorizontal.css";
import {useDispatch} from "react-redux";
import { deleteCart, putCart } from "../../../../redux/action/cartGet";


const CardHorizontal = ({product})=>{
    const dispacht = useDispatch();

    const handleAdd = ()=>{
        dispacht(putCart({productId: product.id, cartId: product.orderLine.cartId, quantity: 1 + Number(product.orderLine.quantity), subTotal: (Number(product.orderLine.quantity )+1) * Number(product.price) }))
    };
    const  handleSubtract = ()=>{
        if(product.orderLine.quantity > 1){
            dispacht(putCart({productId: product.id, cartId: product.orderLine.cartId, quantity: Number(product.orderLine.quantity) - 1, subTotal: (Number(product.orderLine.quantity )- 1)* Number(product.price)}))
        }else{
            dispacht(deleteCart({cartId: product.orderLine.cartId, productId: product.id}))
        }
    };


    return(
        <div className="cardHorizontalContainer">
            <div className="imgContent">
                <img src={product.img} alt="" />
            </div>
            <div className="textContent">
                <h1>{product.name}</h1>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="priceAndBtnContent">
                <span>${product.orderLine.subTotal}</span>
                <div>
                    <button onClick={handleSubtract}><span>-</span></button> {product.orderLine.quantity}  <button onClick={handleAdd}><span>+</span></button>
                </div>
            </div>
        </div>
    )
}

export default CardHorizontal;