import React from "react";
import "./Home.css";
import Nav from '../../components/websiteMobile/nav/Nav';
import Body from '../../containers/websiteMobile/body/Body';
import HeaderMobile from '../../containers/websiteMobile/header/HeaderMobile';

const Home = ()=>{
    return (
    <div className="homeContainer">
        <HeaderMobile/>
        <Body/>
        <Nav/>
    </div>
    )
    
}
export default Home;