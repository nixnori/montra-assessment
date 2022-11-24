import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductData from "./pages/ProductData";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/products/:id" element={<ProductData />} />
			</Routes>
		</>
	);
}

export default App;
