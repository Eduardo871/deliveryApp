import React from "react";
import Chip from "../../../components/websiteMobile/chip/Chip";
import Searchs from "../../../components/websiteMobile/search/Searchs";
import "./HeaderMobile.css";

const HeaderMobile = () => {
    return (
        <div className="headerContainer">
            <div className="headertopContent">
                <div className="headerLogo"></div>
                <img className="headerUserImage" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            </div>
            <div className="headerSearch">
                <div className="text">Find the best food for you</div>
                <Searchs/>
                <div className="headerChipContainer">
                    <Chip type={"Pizza"}/>
                    <Chip type={"Burger"}/>
                    <Chip type={"Soup"}/>
                    <Chip type={"Juice"}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile; 