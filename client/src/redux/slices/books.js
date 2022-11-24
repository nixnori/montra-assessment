import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("content/fetchBooks", async (thunkAPI) => {
	const res = await axios.get("http://localhost:8000/books");
	return res.data.payload;
});

export const fetchBookData = createAsyncThunk("content/fetchBookData", async (id) => {
	const res = await axios.get(`http://localhost:8000/books/${id}`);
	return res.data.payload;
});

export const BooksSlice = createSlice({
	name: "books",
	initialState: {
		books: [],
		bookStatus: "idle",
		bookRrror: null,
		selectedBookData: [],
		bookDataStatus: "idle",
		bookDataError: null,
	},
	extraReducers: {
		[fetchBooks.pending]: (state, action) => {
			state.bookStatus = "loading";
		},
		[fetchBooks.fulfilled]: (state, action) => {
			state.bookStatus = "succeeded";
			state.books = action.payload;
		},
		[fetchBooks.rejected]: (state, action) => {
			state.bookStatus = "failed";
			state.bookRrror = action.error;
		},
		[fetchBookData.pending]: (state, action) => {
			state.bookDatastatus = "loading";
		},
		[fetchBookData.fulfilled]: (state, action) => {
			state.bookDataStatus = "succeeded";
			state.selectedBookData = action.payload;
		},
		[fetchBookData.rejected]: (state, action) => {
			state.bookDataStatus = "failed";
			state.bookDataError = action.error;
		},
	},
});

export default BooksSlice.reducer;
