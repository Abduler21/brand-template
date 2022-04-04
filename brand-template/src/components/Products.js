import React from 'react';

import { NavLink } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import CollectionLink from "../assets/Images/Burn.jpg"
function Products () {

  return (
    <body>
    <div className="main-showcase">
    <div className="container">
        <div className="card">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-1.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Product 1</h2>
                <a href="#">Buy Now</a>
            </div>
        </div>

        <div className="card">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-2.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Product 2</h2>
                <a href="#">Buy Now</a>
            </div>
        </div>
        
        <div className="card">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-3.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Product 3</h2>
                <a href="#">Buy Now</a>
            </div>
        </div>

        <div className="card">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-4.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Product 4</h2>
                <a href="#">Buy Now</a>
            </div>
        </div>
    </div>
</div>

<div className="main-showcase">
    <div className="container">
        <div className="card">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-5.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Product 5</h2>
                <a href="#">Buy Now</a>
            </div>
        </div>

        <div className="card">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-6.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Product 6</h2>
                <a href="#">Buy Now</a>
            </div>
        </div>

        <div className="card">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-7.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Product 7</h2>
                <a href="#">Buy Now</a>
            </div>
        </div>

        <div className="card">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-8.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Product 8</h2>
                <a href="#">Buy Now</a>
            </div>
        </div>
    </div>
</div>
</body>
  );
}

export default Products ;