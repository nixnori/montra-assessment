import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books";
import cartTotalReducer from "./slices/cartTotal";

export const store = configureStore({
	reducer: {
		books: booksReducer,
		cartTotal: cartTotalReducer,
	},
});
