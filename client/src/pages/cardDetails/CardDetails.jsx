import React from "react";
import "./CardDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postCardDetail } from "../../redux/action/cardDetails";
import { postCart } from "../../redux/action/cartGet";
const CardDetails = ()=>{
    const {product} = useSelector((state) => state.productDetails);
    const dispatch = useDispatch();
    const [quantity, setQuantity]= React.useState(1)

    const handleSubtract = ()=>{
        if(quantity > 1){
            product.quantity = product.quantity - 1;
            setQuantity(quantity -1)
        }
    }; 
    
    const handleAdd = ()=>{
        setQuantity(quantity + 1)
        
    }
    // función para cambiar el btn de la review
    const [review, setReview] = React.useState(false);
    
    const handleBtnReview = () =>{ 
        if(review){
            setReview(false)
        }else{
            setReview(true)
        }
    }
  
    // Función para poder ingresar un producto al carrito

    const handleAddToCart = ()=>{
        // dispachar una acción en el carrito 
        dispatch(postCart({userId:1, productId:product.id, quantity}))
    }

    return (
        <div className="cardDetailsContainer">
            <div className="cardDetailsImg">
                <img src={product.img} alt="" />
                <Link to="/" className="icon"><i class="fal fa-arrow-left"></i></Link>
            </div>
            <div className="cardDetailTitleAndReview">
                <h1>{product.name}</h1>
                <div className="review">
                <i class="fas fa-heart"></i>
                 {1}
                </div>
            </div>
            <p className="cardDetailDescription">
                {product.description}
            </p>
            <div className="cardDetailsPriceAndQuantity">
                <span>${product.price * quantity}</span>
                <div className="addAndSubtract">
                    <button onClick={handleSubtract}>-</button> 
                    <span>{quantity}</span> 
                    <button onClick={handleAdd}>+</button>
                </div>
            </div>
            <div className="cardDetailBtn">
               <button className="btn1" onClick={handleAddToCart}><Link to="/cart" className="link">Add to cart</Link></button>
                {
                    review ? (<button onClick={handleBtnReview}><i class="fas fa-heart"></i></button>):(<button onClick={handleBtnReview}><i class="far fa-heart"></i></button>)
                }
            </div>
        </div>
    )
}
export default CardDetails;

