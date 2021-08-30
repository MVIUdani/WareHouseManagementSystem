import React, { Component } from 'react'
import { Link } from "react-router-dom";

function HeroSection(){
return(
    <div style={{background: "#f0ff64"}}>
        <br></br>
        <div style={{marginLeft:"350px"}}>
         <img className="" src='smartbuild.jpg' alt="" width="450" height="400"></img>
         <ul>
        <li><Link to='/stock'>Manage Stocks</Link></li>
         <br></br>
         <li><Link to='/store'>Manage Stores</Link></li>
         <br></br>
         <li><Link to='/store_items'>Manage Store Items</Link></li>
         <br></br>
         </ul>
         </div>
        <h1 style={{marginLeft:"100px"}}>Welcome to WareHouse Management System</h1>
    </div>
) 
}

export default HeroSection