import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

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
		<div className="p-8 flex flex-col">
			<h1 className="text-lg mb-8">Cart</h1>
			{uniqueItems.length === 0 ? (
				<h3 className="mt-8 text-red-600">No items in cart</h3>
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
					<div className="flex gap-x-8 items-center">
						<div className="rounded-lg p-4 bg-slate-100">
							<h3>Total:</h3>
						</div>
						{`$${cartTotal}`}
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
