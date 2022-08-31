
import './login.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Login = (props) => {

    const { setLoggedIn } = props

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email:'',
        password: ''
    })

    const [alert, setAlert] = useState( {
            message: '',
            status:''
        } )


    const handleInput = (e) => {

        setForm({...form, [e.target.name]: e.target.value})
    }


    const handleForm = (e) => {

        e.preventDefault()

        axios.post('/api/users/login', form)
        .then(resp => {
            localStorage.setItem('loggedIn',true)
            setLoggedIn(true)
            
            setAlert({
                message: resp.data,
                status: 'success'
            })

            navigate('/')

        })
        .catch(error => {

            setAlert({
                message: error.response.data,
                status: 'danger'
            })

        })

    }



    return (

        <div className="login-container">
             <h2> {alert.message}</h2>
                <form className="login-form" onSubmit={handleForm}> 
            
                    <div>
                        <label>El pastas</label>
                        <input className='login-input' type="email" name="email" onChange={handleInput} />
                    </div>
                    <div>
                        <label>Slaptazodis</label>
                        <input className='login-input' type="password" name="password" onChange={handleInput} />
                    </div>

                    <button className='login-button'>Prisijungti</button>


                </form>

        </div>

    )
}

export default Login