import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookData } from "../redux/slices/books";
import ProductImageCard from "../components/ProductImageCard";
import { setBooksSelected, setCartTotal } from "../redux/slices/cartTotal";

const ProductData = () => {
	const { id: dataId } = useParams();

	const dispatch = useDispatch();
	const { selectedBookData } = useSelector((state) => state.books);

	useEffect(() => {
		dispatch(fetchBookData(dataId));
	}, [dispatch, dataId, selectedBookData]);

	const { title, author, description, id, image, price } = selectedBookData;

	const h3Styles = "font-semibold slate-600";
	const pStyles = "mb-2";

	const addToCart = () => {
		dispatch(setBooksSelected(selectedBookData));
		dispatch(setCartTotal());
	};

	return (
		<div className="p-8 flex justify-between gap-x-8">
			<div className="bg-slate-100 p-8 rounded-lg w-4/6">
				<h3 className={h3Styles}>Title:</h3>
				<p className={pStyles}>{title}</p>
				<h3 className={h3Styles}>Author:</h3>
				<p className={pStyles}>{author}</p>
				<h3 className={h3Styles}>Description:</h3>
				<p className={pStyles}>{description}</p>
			</div>
			<div className="w-2/6 object-cover flex flex-col bg-slate-100 rounded-lg py-6 items-center">
				<ProductImageCard id={id} imageSrc={image} altText={title} productDetailsPage />
				<h3 className={`${h3Styles} mt-2`}>Price: {`$${price}`}</h3>
				<button onClick={addToCart} className="mt-4 bg-slate-500 py-2 px-4 rounded-lg text-white">
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductData;
