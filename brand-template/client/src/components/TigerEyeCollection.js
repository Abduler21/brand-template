import React from 'react';

import { NavLink } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import CollectionLink from "../assets/Images/Burn.jpg"
import '../product-style.css';

function TigerEyeCollection () {

  return (
    <body>
    <div className="main-showcase">
    <div className="container-product">
       
    <Link to="/TigersEye" className="card-product">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-8.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Tigers Eye Collection</h2>
                <h2>Tigers Eye</h2>
                <a href="https://checkout.stripe.com/pay/cs_test_a1ur2pKkwMyw8RsQVZUJpI0plaGPXxBcbKDnmDWhioTxzzT5dRJlVoufr3#fidkdWxOYHwnPyd1blpxYHZxWjA0TmxKTW1MfWE9Zn1vTDNiVFFOcnczUGZTbVNdNjVUSnZkcHNxQ3w0UEdJMXU3azB3aV1hS01CamExRnw8ZkBWb3xoZkxPbzNxTF1zcF08YHRCUDRBdWZBNTV8YlFyaTBLPCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVpjX2A2Y3Uwcnw8QUZmPTU2ZmkneCUl">Buy Now</a>
            </div>
        </Link>
    </div>
</div>


</body>
  );
}

export default TigerEyeCollection ;