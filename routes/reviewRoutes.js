const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Book = require("../models/Book");
const User = require("../models/User");

// Route to get all reviews and render them
router.get("/", async (req, res) => {
  console.log("Reviews route accessed");
  try {
    const reviews = await Review.find()
      .populate("bookId", "title") // Populate book details
      .populate("userId", "username"); // Populate user details

    // Debugging output
    console.log("Reviews:", reviews);

    res.render("review_index", {
      reviews: reviews.map((review) => ({
        bookTitle: review.bookId ? review.bookId.title : "Unknown Book",
        reviewerName: review.userId ? review.userId.username : "Unknown User",
        rating: review.rating,
        comment: review.comment,
        createdAt: review.createdAt,
      })),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to add a new review
router.post("/", async (req, res) => {
  const { userId, bookId, rating, comment } = req.body;

  try {
    const newReview = new Review({
      userId,
      bookId,
      rating,
      comment,
    });
    await newReview.save();
    res.redirect("/reviews");
  } catch (error) {
    res.status(500).send("Error adding review");
  }
});

module.exports = router;
