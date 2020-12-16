const Book = require('../models/Book.js')

const addBook = async (title,author,userId) => {
    const newBook = new Book({title,author,userId});
    return await newBook.save();
}

const getBookById = async (id) => {
    const bookFound = await Book.findById(id).exec();
    if (!bookFound)
        throw {message: 'Book not found', code: 404};
    return bookFound;
}

const getBookList = async(id) => {
    const bookList = await Book.find({_id:id}).exec();
    return bookList;
}

module.exports = {
    addBook,
    getBookById,
    getBookList
}