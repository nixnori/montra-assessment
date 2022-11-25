const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const booksData = require("./data/booksData.json");

app.use(cors());
app.use(express.json());

app.get("/books", (req, res) => {
	res.status(200).json({ message: "Success", payload: booksData });
});

app.get("/books/:id", (req, res) => {
	const search = booksData.find((book) => book.id === req.params.id);
	if (search) {
		res.status(200).json({ message: "Succes", payload: search });
	} else {
		res.status(400).json({ error: "Book not found" });
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
