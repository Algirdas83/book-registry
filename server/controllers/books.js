
import express from 'express'
import db from '../database/connect.js'
import {auth} from '../middlevear/auth.js'


const router = express.Router()


router.get('/all_books', async(req, res) => {

    try {
         const books = await db.Book.findAll()

         res.status(200).json(books)
         
    } catch (error) {

        res.status(500).send('Ivyko serverio klaida')
    }


})


router.post('/new_book', auth, async (req, res) => {

    try {

        const book = await db.Book.create(req.body)

        res.status(200).send('Knygas sekmingai issaugota')
        
    } catch (error) {
        
        res.status(500).send('Ivyko serverio klaida')
    }
})


router.delete('/delete/:id',auth, async (req, res) => {

    console.log('ID KOOODASSS');

    try {
        
        const deletebook = await db.Book.findByPk(req.params.id)
        deletebook.destroy()

                res.status(200).send('Postas sekmingai istrintas')
    } catch (error) {
        
        console.log(error);
        res.status(500).send('Ivyko serverio klaida')
    }

})


 router.put('/update/:id', auth , async (req, res) => {

    console.log('TESTAS AR GAUNAME KA',req.body);
    try {

        const oneBook = await db.Book.findByPk(req.params.id)
        await oneBook.update(req.body)

        
        res.status(200).send('Atnaujinimas pavyko')
    } catch (error) {

        res.status(500).send('Ivyko serverio kalida')
        
    }

 })

router.get('/one-book/:id', async (req, res) => {

    try {
        const oneBook = await db.Book.findByPk(req.params.id)

        res.json(oneBook)

    } catch (error) {

        console.log(error)
        
    }
})



export default router

