import React from 'react';

import { NavLink } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import CollectionLink from "../assets/Images/Burn.jpg"
import '../product-style.css';

function KryptoCollection () {

  return (
    <body>
    <div className="main-showcase">
    <div className="container-product">

    <Link to="/Kryptex" className="card-product">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-5.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Krypto Collection</h2>
                <h2>Kryptex</h2>
                <a href="#">Buy Now</a>
            </div>
        </Link>

        <Link to="/RedAmber" className="card-product">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-6.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Krypto Collection</h2>
                <h2>Red Amber</h2>
                <a href="https://checkout.stripe.com/pay/cs_test_a174reuazq9mRNka5SNOfOyyODfISfJBbWJ6INSe79U0lXVscnixkl3EVj#fidkdWxOYHwnPyd1blpxYHZxWjA0TmxKTW1MfWE9Zn1vTDNiVFFOcnczUGZTbVNdNjVUSnZkcHNxQ3w0UEdJMXU3azB3aV1hS01CamExRnw8ZkBWb3xoZkxPbzNxTF1zcF08YHRCUDRBdWZBNTV8YlFyaTBLPCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVpnTFxhUDZmXzVnSU48X1ZgUzAneCUl">Buy Now</a>
            </div>
        </Link>
       
    </div>
</div>

</body>
  );
}

export default KryptoCollection ;