import React from 'react';

import { NavLink } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import CollectionLink from "../assets/Images/Burn.jpg"
import '../product-style.css';

function UzumakiCollection () {

  return (
    <body>
    <div className="main-showcase">
    <div className="container-product">
        <Link to="/Uzumaki" className="card-product">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Uzumaki.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Uzumaki Collection</h2>
                <h2>Uzumaki</h2>
                <a href="#">Buy Now</a>
            </div>
        </Link>
    </div>
</div>

</body>
  );
}

export default UzumakiCollection ;