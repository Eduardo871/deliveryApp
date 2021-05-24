import React from "react";
import "./Chip.css";
import {useDispatch} from "react-redux";
import { chipGet } from "../../../redux/action/chip";

const Chip = ({type})=> {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(chipGet(type.toLowerCase()))
    }
    return (
        <div className="chipContainer" onClick={handleClick}>
            <p>{type}</p>
            { type === "Pizza" ? (<i class="fal fa-pizza-slice"></i>):
              type === "Burger" ? (<i class="fas fa-cheeseburger"></i>):
              type === "Soup" ?  (<i class="far fa-soup"></i>):
              (<i class="fal fa-cocktail"></i>)}
        </div>
    )
}

export  default Chip;