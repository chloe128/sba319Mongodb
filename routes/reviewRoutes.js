const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// Create a new review
router.post("/", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().populate("userId").populate("bookId");
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a review by ID
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("userId")
      .populate("bookId");
    if (!review) {
      return res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a review by ID
router.patch("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!review) {
      return res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a review by ID
router.delete("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
