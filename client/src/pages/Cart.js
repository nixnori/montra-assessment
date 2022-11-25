import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
	const { booksSelected, cartTotal } = useSelector((state) => state.cartTotal);
	const [uniqueItems, setUniqueItems] = useState([]);

	useEffect(() => {
		const getUniqueItems = () => {
			let booksIds = [];
			let books = [];
			booksSelected.forEach((book) => {
				if (!booksIds.includes(book.id)) {
					booksIds.push(book.id);
					books.push(book);
				}
			});
			return books;
		};
		setUniqueItems(getUniqueItems());
	}, [booksSelected]);

	return (
		<div className="p-16 flex flex-col pt-28">
			<h1 className="text-4xl mb-8 font-semibold">Cart</h1>
			{uniqueItems.length === 0 ? (
				<>
					<h3 className="mt-8">Your cart is currently empty.</h3>
					<NavLink
						to="/products"
						className="font-medium text-sm bg-slate-500 rounded-lg w-fit py-3 px-5 text-white mt-12 hover:bg-slate-600"
					>
						Return to Products
					</NavLink>
				</>
			) : (
				uniqueItems.map((item) => (
					<CartItem
						id={item.id}
						selectedBooks={booksSelected}
						title={item.title}
						image={item.image}
						price={item.price}
						description={item.description}
					/>
				))
			)}
			{uniqueItems.length !== 0 && (
				<div className="flex w-full justify-end">
					<div className="flex gap-x-8 items-center mt-2">
						<div className="rounded-lg p-4 bg-blue-800">
							<h3 className="font-semibold text-white">Total</h3>
						</div>
						<p className="text-xl font-medium mr-2">{`$${cartTotal.toFixed(2)}`}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
