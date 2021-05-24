import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {useSelector} from "react-redux";

const Nav = ()=>{
    const {productsCart, error, loading} = useSelector((state) => state.productCart);
    
    return (
        <div className="navContainer">
            <ul>
                <li><i class="far fa-heart"></i></li>
                <li><i class="fal fa-home-lg-alt"></i></li>
                <li>
                    <Link to="/cart">
                        <i class="fal fa-shopping-cart">
                            <span style={{fontWeight:"900", marginLeft:"4px",color:"#b9b7b7"}}>
                                {
                                 loading ? (""):
                                 productsCart && productsCart.products.length !== 0 ? (productsCart.products.length):
                                 error ? (""):
                                 ("")
                                    
                                }
                            </span>
                        </i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav;