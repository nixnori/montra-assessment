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
			<img className="h-44 w-44" src={image} alt={title} />
			<div className="flex flex-col">
				<h3 className="font-semibold mb-4">{title}</h3>
				<div className="bg-slate-200 rounded-lg p-8">{description}</div>
			</div>
			<div className="flex flex-col justify-center">
				<h3 className="font-medium mb-2">
					Price: <span className="font-normal text-slate-600">{price}</span>
				</h3>
				<h3 className="font-medium mb-2">
					Quantity: <span className="font-normal text-slate-600">{quantity}</span>
				</h3>
			</div>
			<button className="absolute right-4 top-2" onClick={removeBook}>
				x
			</button>
		</div>
	);
};

export default CartItem;
