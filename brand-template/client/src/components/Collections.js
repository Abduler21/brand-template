import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes, Route, Outlet, Link } from "react-router-dom";



function Collections(props) {
	const { currentTab, setCurrentTab } = props;


  return (
    <body>
        <h2 className="page-title">
            Collections
        </h2>
    <div className="container">
        
        <Link to="/Equinox" className='card'>
        <a href="#" >
                <img src={require(`../assets/Images/Equinox-Collection.jpg`)} />
                <div className="card__head">Equinox</div>
                </a>
        </Link>
        <Link to="/KryptoCollection" className="card">
            <a href="#">
                <img src={require(`../assets/Images/Kryptex-Collection.jpg`)}/>
                <div className="card__head">Krypto</div>
            </a>
        </Link>
        <Link to="/TigerEyeCollection" className="card">
            <a href="#">
                <img src={require(`../assets/Images/Tigers-Eye-Collection.jpg`)}/>
                <div className="card__head">Tigers Eye</div>
            </a>
        </Link>
        <Link to="/UzumakiCollection" className="card">
            <a href="#">
                <img src={require(`../assets/Images/Uzumaki-Collection.jpg`)}/>
                <div className="card__head">Uzumaki</div>
            </a>
        </Link>
        {/* <div className="card">
            <a href="#">
                <img src={require(`../assets/Images/Shadow.jpg`)}/>
                <div className="card__head">Shadow</div>
            </a>
        </div> */}
    </div>

</body>
  );
}

export default Collections;