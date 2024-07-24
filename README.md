# Book Review Application

## Description

This is a simple web application built with Express.js and MongoDB for managing books and their reviews. It allows users to view a list of books, add new books, and submit reviews for the books.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- EJS (Embedded JavaScript Templating)
- Body-Parser
- Method-Override

## Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your system.

### Clone the Repository

```bash
git clone https://github.com/your-username/book-review-app.git
cd book-review-app
Install Dependencies
bash
Copy code
npm install
Configuration
Create a .env file in the root directory and add your MongoDB connection string:

env

MONGODB_URI=mongodb://localhost:27017/your-database-name
Run the Application
Start the application with:

bash

npm start
The application will be accessible at http://localhost:3000.

Routes
GET /: Renders the home page.
GET /books: Displays a list of books.
POST /books: Adds a new book.
GET /reviews: Displays a list of reviews.
POST /reviews: Adds a new review.
Models
User: Represents a user with username, email, password, and createdAt.
Book: Represents a book with title, author, genre, publishedYear, and createdAt.
Review: Represents a review with userId, bookId, rating, comment, and createdAt.
Views
views/index.ejs: Home page.
views/books_index.ejs: Page to list books and add new ones.
views/review_index.ejs: Page to list reviews and add new ones.
Usage
Navigate to the Books page to view the list of books and add new books.
Navigate to the Reviews page to view the list of reviews and add new reviews.
```
