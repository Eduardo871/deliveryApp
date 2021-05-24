import React from "react";
import CardHorizontal from "../../components/websiteMobile/card/cardHorizontal/CardHorizontal";
import "./Cart.css";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
const Cart = ()=>{

    const {productsCart, error, loading} = useSelector((state) => state.productCart);

    return(
        <div className="cartContainer">
             
            <div className="cartTitle">
                <Link to="/" className="icon icon2 "><i class="fal fa-arrow-left"></i></Link>
                <h1>Shoping cart</h1>
            </div>
            <div className="cartCardHoriontal">
                {
                    loading ? (<h1>LOADING...</h1>):
                    productsCart && productsCart.products.length !== 0 ? (productsCart.products.map(p =><CardHorizontal product={p}/>)):
                    error ? (<h1>{error}</h1>):
                    (<h1>There are no products in the cart</h1>)
                }
            </div>
            <div className="cartTotal">
                <div>
                   <div className="span"> <span>Total price: </span> 
                   <span>${
                   productsCart && productsCart.products.length === 0 ? (0):(productsCart.total) 
                }</span></div>
                    <div className="btn">
                        <button>Cancel</button> <button className="one">Place order</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cart;