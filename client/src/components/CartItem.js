import React from "react";
import { useDispatch } from "react-redux";
import { removeBooks, setCartTotal } from "../redux/slices/cartTotal";

const CartItem = ({ id, title, image, description, price, selectedBooks }) => {
	const dispatch = useDispatch();
	const quantity = selectedBooks.filter((book) => book.id === id).length;

	const removeBook = () => {
		let bookList = [...selectedBooks];
		const index = bookList.findIndex((book) => book.id === id);
		bookList.splice(index, 1);
		dispatch(removeBooks(bookList));
		dispatch(setCartTotal());
	};

	return (
		<div className="p-8 bg-slate-100 flex justify-between rounded-lg gap-x-8 mb-4 relative">
			<img className="h-52 w-44 rounded-lg" src={image} alt={title} />
			<div className="flex flex-col">
				<h3 className="font-semibold mb-6 text-2xl">{title}</h3>
				<div className="bg-slate-200 rounded-lg p-6">{`${description.substring(0, 200)}...`}</div>
			</div>
			<div className="flex flex-col justify-center">
				<h3 className="font-semibold">Price</h3>
				<p className="font-normal text-slate-600 mb-2">{price}</p>
				<h3 className="font-semibold">Quantity</h3>
				<p className="font-normal text-slate-600">{quantity}</p>
			</div>
			<button className="absolute right-6 top-4 font-semibold" onClick={removeBook}>
				x
			</button>
		</div>
	);
};

export default CartItem;
