import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const textDefaultClassName = "mr-10 text-lg";
	const active = `${textDefaultClassName} text-gray-500`;
	const notActive = `${textDefaultClassName} text-gray-580`;

	return (
		<div className="bg-slate-300 w-screen h-16 flex flex-col place-content-center px-8">
			<div>
				<NavLink to="/" className={({ isActive }) => (isActive ? active : notActive)}>
					Home
				</NavLink>
				<NavLink to="products" className={({ isActive }) => (isActive ? active : notActive)}>
					Products
				</NavLink>
				<NavLink to="cart" className={({ isActive }) => (isActive ? active : notActive)}>
					Cart
				</NavLink>
			</div>
		</div>
	);
};

export default Nav;
