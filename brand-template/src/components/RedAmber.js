import React from 'react';

import { NavLink, renderMatches } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import CollectionLink from "../assets/Images/Burn.jpg"
import '../singleProduct.css';

class RedAmber extends React.Component {

  constructor  (props) {
    super(props);
    this.state={ count: 1}
}

 onclick  (type) {
   this.setState(prevState => {
      return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
   });
}

render() {
  return (
    <body>
    <div className="container-single">

 {/* Left Column / Headphones Image  */}
<div className="left-column-single">
    {/* <img data-image="black" src="images/black.png" alt="">
    <img data-image="blue" src="images/blue.png" alt=""> */}
    <img className="active" src={require(`../assets/Images/products/Product-6.png`)} alt="" />
</div>


 {/* Right Column  */}
<div className="right-column">

     {/* Product Description  */}
    <div className="product-description">
        <span>Equinox Collection</span>
        <h1>Special Edition "Red Amber" Balaclava</h1>
    </div>
{/* 
     Product Pricing  */}
    <div className="product-price">
        <span>$44.99</span>
        <br />
        <div className="quantity buttons_added">
        <input type='button' onClick={this.onclick.bind(this, 'add')} value='Inc'/>
        <input type='button' onClick={this.onclick.bind(this, 'sub')} value='Dec'/>
        </div>
        <a href="https://checkout.stripe.com/pay/cs_test_a174reuazq9mRNka5SNOfOyyODfISfJBbWJ6INSe79U0lXVscnixkl3EVj#fidkdWxOYHwnPyd1blpxYHZxWjA0TmxKTW1MfWE9Zn1vTDNiVFFOcnczUGZTbVNdNjVUSnZkcHNxQ3w0UEdJMXU3azB3aV1hS01CamExRnw8ZkBWb3xoZkxPbzNxTF1zcF08YHRCUDRBdWZBNTV8YlFyaTBLPCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVpnTFxhUDZmXzVnSU48X1ZgUzAneCUl" className="cart-btn">Add to cart</a>
    </div>

    <div className="product-description-info">
        <p>Unisex</p>
        <br />
        <p>One Size Fits All</p>
        <br />
        <p>Light Strech, Very Breathable</p>
        <br />
        <p>100% Premium-Grade Light Mohair knit.</p>
        <br />
        <p>w/ LIte Paint Strokes of blue, grey, black & white knit patterns</p>
        <br />
        <p>100% Handcrafted</p>
        <br />
        <p>Made with love in Canada</p>
        <br />
        <p>The fabric is easy to wash by gently hand washing and line drying</p>
        <br />
        <p>Ships Between 1 to 2 Weeks</p>
        <br />
    </div>
</div>
</div>
</body>
  )
  }
}

export default RedAmber ;