import './newbook.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Newbook = () => {



    const navigate = useNavigate()

    const [form, setForm] = useState({

        book: '',
        author: '',
        Cover_author: '',
        usbn_kodas: '',
        image: ''

    })

    const [alert, setAlert] = useState({
        message:'',
        status:''
    })

    const handleImput = (e) => {
        
        setForm({...form, [e.target.name]: e.target.value})
       
    }

    const handleForm = (e) => {

        e.preventDefault()

        console.log(form);
        axios.post('/api/books/new_book', form)
        .then( resp => {
            
            setAlert({
                message: resp.data,
                status: 'success'
            })

            setTimeout(() => {

                navigate('/')

            }, 3000)
  
        })
        
        .catch(error => {

            setAlert({
                message: error.response.data,
                status: 'success'
            })

        })

        

    }


    

    return (

        <div className="newBook-container">
            

            <form  onSubmit={handleForm} className = "newBook-form">
                {alert.message &&
                <div>
                    <h3>{alert.message}</h3>
                </div>
                }
                <div>
                    <label> Knyga</label>
                    <input className='newBook-input'  type="text" name="book" onChange={handleImput} />
                </div>
                <div>
                    <label> Autorius</label>
                    <input className='newBook-input' type="text" name="author" onChange={handleImput} />
                </div>
                <div>
                    <label> Visrselio autorius</label>
                    <input className='newBook-input' type="text" name="Cover_author" onChange={handleImput} />
                </div>
                <div>
                    <label>USBN kodas</label>
                    <input className='newBook-input' type="text" name="usbn_kodas" onChange={handleImput} />
                </div>
                <div>
                    <label>Nuotrauka</label>
                    <input className='newBook-input' type="text" name="image" onChange={handleImput} />
                </div>

                <button className='newBook-button'>Registruotis</button>

            </form>

        </div>


    )



   
}

export default Newbook