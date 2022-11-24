import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductImageCard from "../components/ProductImageCard";
import { fetchBooks } from "../redux/slices/books";

const Product = () => {
	const dispatch = useDispatch();
	const { books, bookStatus } = useSelector((state) => state.books);

	useEffect(() => {
		if (bookStatus === "idle") {
			dispatch(fetchBooks());
		}
	}, [bookStatus, dispatch]);

	return (
		<div className="p-8">
			<h1 className="text-lg">Products</h1>
			<div className="flex w-full justify-center">
				{books.map((book) => {
					return (
						<React.Fragment key={book.id}>
							<ProductImageCard id={book.id} imageSrc={book.image} altText={book.title} />
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default Product;
