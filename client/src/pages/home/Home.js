import './home.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const Home = (props) => {

const {loggedIn} = props

const [books, setBooks] = useState([])
const [button, setButton] = useState(false)


useEffect(() => {

  axios.get(`/api/books/all_books`)
  .then(resp => {

     setBooks(resp.data)
     

  })
},[button])//useEffect end


const handleDelete = (id) => {

  axios.delete(`/api/books/delete/${id}`)
  .then(resp => {

    console.log(resp)
    setButton(!button)

  })
  .catch(error => {

    console.log(error)
  })

}


    return (
        <div className="home-container">

          <table className='home-table'>
            <thead>
              <tr className='thead-tr'>
                <th className='th-l'>Nuotrauka</th>
                <th>Knyga</th>
                <th>Autorius</th>
                <th>Virselio autorius</th>
                <th>USBN-kodas</th>
                <th className='th-r'></th>
                
                
              </tr>

              </thead>

              <tbody>
                {books.map(allbooks => {
                  
                  // handleClick(data.id)
                  return(
                    <tr>
                    <td> <img className='home-image' src={allbooks.image} alt= {allbooks.book} /></td>
                    <td>{allbooks.book}</td>
                    <td>{allbooks.author}</td>
                    <td>{allbooks.Cover_author}</td>
                    <td>{allbooks.usbn_kodas}</td>
                    <td className='home-buton-f'>
                         <Link className='home-link-p'  to={`/one-book/${allbooks.id}`}>Peržiūrėti</Link>
                    
                     {loggedIn && ( 
                      <>
                          <button className='home-btn-delete btn' onClick={() => handleDelete(allbooks.id)}>Ištrinti</button>
                          <Link className='home-link-r'  to={`/update-book/${allbooks.id}`}>Redaguoti </Link>
                      </>
                    )}
                    </td>
                  </tr>

                  )


                })}
                
              </tbody>
          </table>
         
        
        </div>
      );
}


export default Home