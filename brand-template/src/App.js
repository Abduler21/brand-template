import logo from "./logo.svg";
import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react'
import Header from './components/Header';
import Contact from './components/Contact';
import Collections from './components/Collections';
import Products from './components/Products';
import SingleProducts from './components/SingleProduct';
import GoldenSapphire from './components/GoldenSapphire';
import RedAmber from './components/RedAmber';
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
      <Route path="/SingleProducts" element={<SingleProducts />} />
      <Route path="/GoldenSapphire" element={<GoldenSapphire />} />
      <Route path="/RedAmber" element={<RedAmber />} />
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
