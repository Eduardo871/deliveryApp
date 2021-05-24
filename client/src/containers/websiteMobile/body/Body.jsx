import React from "react";
import CardVertical from "../../../components/websiteMobile/card/cardVertical/CardVertical";
import "./Body.css";
import {useSelector} from "react-redux";
import {order} from "./order";


const Body = ()=>{
    const {product, loading} = useSelector((state) => state.product);
    const data = order(product);
    console.log(product)
    let datos = [{title:"Pizza Peperoni", subtitle:"With tomato", img:"https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",price:10, review:4.1,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt numquam nisi eos dicta ea id vel minus tempore", quantity:1}, {title:"Pizza with chedar", subtitle:"With cheese", img:"https://images.pexels.com/photos/5108603/pexels-photo-5108603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",price:10,review:4,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt numquam nisi eos dicta ea id vel minus tempore, est eveniet quos. Perspiciatis itaque expedita quas, eaque culpa saepe voluptate.", quantity:1}]
    return (
        <>
        {
            data && data.length !== 0 ? (data.map(d =>{
                return(
                    <div className="bodyContainer">
                        {d.map(p => <CardVertical product={p}/>)}
                    </div>
                )
            })):("")
        }

        {/* <span className="bodyMore"><i class="far fa-chevron-double-down"></i>More<i class="far fa-chevron-double-down"></i></span> */}
        </>
    )
}
export default Body;