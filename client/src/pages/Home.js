import React, { useEffect } from "react";
import ProductImageCard from "../components/ProductImageCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slices/books";

const Home = () => {
	const dispatch = useDispatch();
	const { books, bookStatus } = useSelector((state) => state.books);

	useEffect(() => {
		if (bookStatus === "idle") {
			dispatch(fetchBooks());
		}
	}, [bookStatus, dispatch, books]);

	return (
		<div className="p-8">
			<h1 className="text-lg">Home</h1>
			<div className="flex flex-col items-center">
				<h3 className="text-red-600 text-xl font-medium">Featured book</h3>
				{books[0] && (
					<>
						<ProductImageCard id={books[0].id} imageSrc={books[0].image} altText={books[0].title} />
						<h3>{books[0].title}</h3>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
