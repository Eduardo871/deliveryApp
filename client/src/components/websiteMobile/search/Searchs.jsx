import React from "react";
import Search from "./Search.css";
import {useDispatch, useSelector} from "react-redux";
import { searchGet } from "../../../redux/action/search";

const Searchs = ()=>{
    const [name, setName] = React.useState('pizza');
    const dispatch = useDispatch();
    
    const handleChange = (v)=>{
        const value = v.target.value;
        setName(value)
    };
    const handleKeyUp = (v)=>{
        const key = v.key;
        if(key === "Enter"){
            dispatch(searchGet(name))
        }
    }
    return (
       <div className="searchContainer">
           <input type="text" autoComplete="off" placeholder="Search for pizza and..." className="input" onChange={handleChange} onKeyUp={handleKeyUp}/>
           <i className="fal fa-search"></i>
       </div>
    )
}
export default Searchs;