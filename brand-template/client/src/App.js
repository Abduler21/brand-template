import logo from "./logo.svg";
import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react'
import Header from './components/Header';
import Contact from './components/Contact';
import Collections from './components/Collections';
import Products from './components/Products';
import BlueAmber from './components/BlueAmber';
import GoldenSapphire from './components/GoldenSapphire';
import Uzumaki from './components/Uzumaki';
import Kryptex from './components/Kryptex';
import RedAmber from './components/RedAmber';
import TigersEye from './components/TigersEye';
import Equinox from './components/Equinox';
import KryptoCollection from './components/KryptoCollection';
import TigerEyeCollection from './components/TigerEyeCollection';
import UzumakiCollection from './components/UzumakiCollection';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import Footer from './components/Footer';


function App() {
 
  return (
    <div>
    <div>
    <Header ></Header>
		<Routes>
		<Route path="/" element={<Collections />} />
		<Route path="/Collections" element={<Collections />} />
			<Route path="/Products" element={<Products />} />
      <Route path="/BlueAmber" element={<BlueAmber />} />
      <Route path="/GoldenSapphire" element={<GoldenSapphire />} />
      <Route path="/Uzumaki" element={<Uzumaki />} />
      <Route path="/Kryptex" element={<Kryptex />} />
      <Route path="/RedAmber" element={<RedAmber />} />
      <Route path="/TigersEye" element={<TigersEye />} />
      <Route path="/Equinox" element={<Equinox />} />
      <Route path="/KryptoCollection" element={<KryptoCollection />} />
			<Route path="/TigerEyeCollection" element={<TigerEyeCollection />} />
      <Route path="/UzumakiCollection" element={<UzumakiCollection />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
	</Routes>
  </div>
    <div>
				<Outlet />
			</div>
    <Footer></Footer>
  </div>
  );
}

export default App;
