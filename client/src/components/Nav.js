import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
	const { booksSelected } = useSelector((state) => state.cartTotal);

	return (
		<div className="bg-white shadow-md w-screen h-16 flex flex-col place-content-center px-8 z-10 fixed">
			<div>
				<NavLink to="/" className="font-medium mr-10 text-lg hover:text-slate-500">
					Home
				</NavLink>
				<NavLink to="products" className="font-medium mr-10 text-lg hover:text-slate-500">
					Products
				</NavLink>
				<NavLink to="cart" className="font-medium mr-10 text-lg hover:text-slate-500">
					{`Cart (${booksSelected.length})`}
				</NavLink>
			</div>
		</div>
	);
};

export default Nav;
