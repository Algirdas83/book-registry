import'./updateBook.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'




const UpdateBook = () => {

    const {id} = useParams()
    const [book, setBook] = useState({
        book:'',
        author:'',
        Cover_author:'',
        usbn_kodas: '',
        image:''





    })

    useEffect(() => {

        axios.get(`/api/books/one-book/${id}`)
        .then(resp => {

            setBook(resp.data)
            
        })

        



    },[])

    const handleImput = (e) => {

        setBook({...book,[e.target.name]: e.target.value })

    }

    const handleForm = (e) => {

        e.preventDefault()

        axios.put(`/api/books/update/${id}`, book )
        .then(resp => {
            console.log(resp);
        })
    }





    return(

        <div className="update-container">
            
            
            <form onSubmit={handleForm}  className = "update-form">
                {alert.message &&
                <div>
                    <h3>{alert.message}</h3>
                </div>
                }
                <div>
                    <label> Knyga</label>
                    <input className='update-imput' type="text" name="book" onChange={handleImput}  value = {book.book}/>
                </div>
                <div>
                    <label> Autorius</label>
                    <input className='update-imput' type="text" name="author" onChange={handleImput} value = {book.author}/>
                </div>
                <div>
                    <label> Visrselio autorius</label>
                    <input className='update-imput' type="text" name="Cover_author" onChange={handleImput} value = {book.Cover_author} />
                </div>
                <div>
                    <label>USBN kodas</label>
                    <input className='update-imput' type="text" name="usbn_kodas" onChange={handleImput} value = {book.usbn_kodas} />
                </div>
                <div>
                    <label>Nuotrauka</label>
                    <input className='update-imput' type="text" name="image" onChange={handleImput}  value = {book.image}/>
                </div>

                <button className='update-button'>Atnaujinti</button>

            </form>

        </div>
    )
}

export default UpdateBook