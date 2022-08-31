import './register.css'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'



const Register = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({

        name: '',
        last_name: '',
        email: '',
        password: ''

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
        axios.post('/api/users/register', form)
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

        <div className="regsiter-container">
            

            <form  onSubmit={handleForm} className = "regsiter-form">
                {alert.message &&
                <div>
                    <h3>{alert.message}</h3>
                </div>
                }
                <div>
                    <label> Vardas</label>
                    <input className='register-imput' type="text" name="name" onChange={handleImput} />
                </div>
                <div>
                    <label> Pavarde</label>
                    <input className='register-imput' type="text" name="last_name" onChange={handleImput} />
                </div>
                <div>
                    <label> El pastas</label>
                    <input className='register-imput' type="email" name="email" onChange={handleImput} />
                </div>
                <div>
                    <label>Slaptazodis</label>
                    <input className='register-imput' type="password" name="password" onChange={handleImput} />
                </div>

                <button className='register-button'>Registruotis</button>

            </form>

        </div>


    )


}

export default Register