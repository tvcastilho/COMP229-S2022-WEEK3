let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect tto our Book Model
let Book = require('../models/book');

/* GET Route for the Book List page - READ Operation */
router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('book', { title: 'Book List', BookList: bookList })
        }
    })
})

module.exports = router;