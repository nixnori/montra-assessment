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

	const h3Styles = "font-semibold slate-600 text-xl mt-4";

	const addToCart = () => {
		dispatch(setBooksSelected(selectedBookData));
		dispatch(setCartTotal());
	};

	return (
		<div className="p-16 flex justify-between gap-x-8 pt-28">
			<div className="bg-slate-200 p-10 rounded-lg w-4/6">
				<h1 className="text-4xl font-semibold mb-2">{title}</h1>
				<h3 className={h3Styles}>by</h3>
				<p className="mb-10">{author}</p>
				<h3 className={h3Styles}>Description</h3>
				<p>{description}</p>
			</div>
			<div className="w-2/6 object-cover flex flex-col bg-slate-100 rounded-lg py-10 items-center">
				<ProductImageCard
					id={id}
					imageSrc={image}
					title={title}
					productDetailsPage
					price={price}
					addToCart={addToCart}
				/>
			</div>
		</div>
	);
};

export default ProductData;
