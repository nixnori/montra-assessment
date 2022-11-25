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
		<div className="p-16 pt-28">
			<h1 className="text-4xl font-semibold">Home</h1>
			<div className="flex w-full justify-center py-6">
				<div className="flex w-full justify-center">
					<div className="flex flex-col p-20 justify-center rounded-l-lg w-1/2 bg-blue-800">
						<h3 className="text-white text-5xl font-bold">Best seller!</h3>
						<p className="text-white mt-4">Check out our employee pick for the month.</p>
					</div>
					<div className="flex flex-col items-center p-10 rounded-r-lg bg-slate-200 w-1/2">
						{books[0] && (
							<>
								<ProductImageCard
									id={books[0].id}
									imageSrc={books[0].image}
									title={books[0].title}
									price={books[0].price}
									home
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
