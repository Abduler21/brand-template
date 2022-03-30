import React, { useState } from 'react';
import "../index.css";

function Collections() {

  return (
    <body>

    <div className="container">
        <h1 className="page-title">
            Collections
        </h1>
        <div className="card">
            <a href="#">
                <img src={require(`../assets/Images/Burn.jpg`)}/>
                <div className="card__head">Burn</div>
            </a>
        </div>
        <div className="card">
            <a href="#">
                <img src={require(`../assets/Images/Icebox.jpg`)}/>
                <div className="card__head">Ice Box</div>
            </a>
        </div>
        <div className="card">
            <a href="#">
                <img src={require(`../assets/Images/Rollie.jpg`)}/>
                <div className="card__head">Rollie</div>
            </a>
        </div>
        <div className="card">
            <a href="#">
                <img src={require(`../assets/Images/Smoke.jpg`)}/>
                <div className="card__head">Smoke</div>
            </a>
        </div>
        <div className="card">
            <a href="#">
                <img src={require(`../assets/Images/Shadow.jpg`)}/>
                <div className="card__head">Shadow</div>
            </a>
        </div>
    </div>

</body>
  );
}

export default Collections;