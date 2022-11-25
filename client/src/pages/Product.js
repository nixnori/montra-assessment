import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductImageCard from "../components/ProductImageCard";
import { fetchBooks } from "../redux/slices/books";
import { setBooksSelected, setCartTotal } from "../redux/slices/cartTotal";

const Product = () => {
	const dispatch = useDispatch();
	const { books, bookStatus } = useSelector((state) => state.books);
	const { booksSelected } = useSelector((state) => state.cartTotal);

	useEffect(() => {
		if (bookStatus === "idle") {
			dispatch(fetchBooks());
		}
	}, [bookStatus, dispatch]);

	console.log(booksSelected);

	return (
		<div className="p-16 pt-28">
			<h1 className="text-4xl font-semibold">Products</h1>
			<div className="flex w-full justify-center">
				{books.map((book) => {
					return (
						<div className="flex flex-col mx-14 mt-10 items-center" key={book.id}>
							<ProductImageCard
								id={book.id}
								imageSrc={book.image}
								title={book.title}
								price={book.price}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Product;
