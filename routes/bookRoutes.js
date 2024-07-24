const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Route to get all books and render them
router.get("/", async (req, res) => {
  console.log("GET /books route hit");
  try {
    const books = await Book.find();
    console.log("Books fetched:", books);
    res.render("books_index", { books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Server Error");
  }
});

// Route to add a new book
router.post("/", async (req, res) => {
  const { title, author, genre, publishedYear } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      genre,
      publishedYear,
    });
    await newBook.save();
    res.redirect("/books");
  } catch (error) {
    res.status(500).send("Error adding book");
  }
});

module.exports = router;
