import { createSlice } from "@reduxjs/toolkit";

const sum = (array) => {
	if (array.length === 1) {
		return array[0].price;
	}

	let prices = [];
	array.forEach((item) => prices.push(item.price));

	return prices.reduce((a, b) => a + b, 0);
};

export const CartTotalSlice = createSlice({
	name: "cartTotal",
	initialState: {
		booksSelected: [],
		cartTotal: 0,
	},
	reducers: {
		setBooksSelected: (state, action) => {
			return { ...state, booksSelected: [...state.booksSelected, action.payload] };
		},
		setCartTotal: (state, action) => {
			return { ...state, cartTotal: sum(state.booksSelected) };
		},
		removeBooks: (state, action) => {
			return { ...state, booksSelected: action.payload };
		},
	},
});

export const { setBooksSelected, setCartTotal, removeBooks } = CartTotalSlice.actions;

export default CartTotalSlice.reducer;
