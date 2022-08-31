
import {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import './oneBook.css'


const OneBook = () => {

    const [book , setBook] = useState([])
    const {id} = useParams()

    useEffect(() => {
        
        axios.get(`/api/books/one-book/${id}`)
        .then(resp => {

            console.log(resp)
             setBook(resp.data)
            
        })



    }, [id])






    return (
        <div className="oneBook-container">
            <div className="oneBook-image">
                <img src={book.image} alt={book.book} />
             </div>

             <div className="oneBook-text">
                <h3>{book.book}</h3>
                <p>{book.author}</p>
                <p>{book.Cover_author}</p>
                <p>{book.usbn_kodas}</p>
             </div>


        </div>

    )



}


export default OneBook