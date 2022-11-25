import React from "react";
import { NavLink } from "react-router-dom";

const ProductImageCard = ({ id, imageSrc, title, productDetailsPage, price, addToCart, home }) => {
	if (productDetailsPage) {
		return (
			<>
				<img className="h-80 rounded-lg" src={imageSrc} alt={title} />
				<h3 className={`font-semibold slate-600 text-xl mt-4`}>{`$${price}`}</h3>
				<button
					onClick={addToCart}
					className="font-medium text-sm bg-slate-500 rounded-lg w-fit py-3 px-5 text-white mt-6 hover:bg-slate-600"
				>
					Add to cart
				</button>
			</>
		);
	}

	return (
		<>
			<NavLink className="group relative" to={home ? `/products/${id}` : `${id}`}>
				<img className="h-80 group-hover rounded-lg " src={imageSrc} alt={title} />
				<div className="hidden group-hover:block group-hover:opacity-80 w-full  absolute bg-slate-900 bottom-0 left-0 p-4 rounded-b-lg text-white font-semibold text-center">
					View details
				</div>
			</NavLink>
			<h2 className="mt-4 font-semibold">{title}</h2>
			<h3 className={`slate-600 text-xl mt-2`}>{`$${price}`}</h3>
		</>
	);
};

export default ProductImageCard;
