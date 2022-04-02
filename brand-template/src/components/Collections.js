import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CollectionLink from "../assets/Images/Burn.jpg"
import "../index.css";

function Collections(props) {
	const { currentTab, setCurrentTab } = props;


  return (
    <body>

    <div className="container">
        <h1 className="page-title">
            Collections
        </h1>
        <Link to="/Products">
        <div className="card" >
        <a href="/Products" >
                <img src={CollectionLink} />
                <div className="card__head">Ice Box</div>
                </a>
        </div>
        </Link>
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