const router = require('express').Router();
const {getBookList,getBookById,addBook} = require('../services/book.service.js');

router.get('/', async (req,res)=>{
    const {id} = req.query;
    try {
        const bookFound = await getBookById(id);
        res.json(bookFound)
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

router.get('/list', async (req,res)=> {
    const id = req.id;
    try {
        const bookList = await getBookList(id);
        res.json(bookList)
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

router.post('/', async (req,res)=>{
    const {author,title} = req.body;
    const id = req.id;
    try {
        const newBook = await addBook(title,author,id);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

module.exports = router;