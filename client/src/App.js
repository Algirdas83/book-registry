
import './App.css'
 import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './pages/header/Header';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Logout from './pages/logout/Logout';
import Newbook from './pages/newBook/Newbook' 
import Home from './pages/home/Home'
import OneBook from './pages/one_book/oneBook';
import UpdateBook from './updateBook/UpdateBook';



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
    
    useEffect(() => {

        if(localStorage.getItem('loggedIn') === 'true'){
            setLoggedIn(true)
        }

    },[])//useEffect end

  return (

    <BrowserRouter>
    <Header loggedIn = {loggedIn}/>
      <Routes>
        <Route path='/' element = {<Home  loggedIn = {loggedIn}/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login setLoggedIn = {setLoggedIn}/>}/>
        <Route path='/logout' element = {<Logout setLoggedIn = {setLoggedIn}/> }/>
        <Route path='/newBook' element = {<Newbook/>}/>
        <Route path='/one-book/:id' element  = { <OneBook/> } />
        <Route path='/update-book/:id' element = { <UpdateBook/> } />

      </Routes>
  
  </BrowserRouter>

  )
   
}

export default App;
