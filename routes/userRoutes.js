const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.render("users_index", { users });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get form to create new user
router.get("/new", (req, res) => {
  res.render("users_new.ejs");
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.redirect("/users");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get a user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.render("users_show.ejs", { user });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get form to edit a user by ID
router.get("/:id/edit", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.render("users_edit.ejs", { user });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a user by ID
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.redirect(`/users/${user._id}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.redirect("/users");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
