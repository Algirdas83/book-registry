
import { Link } from "react-router-dom";
import './header.css'


const Header = (props) => {

    const {loggedIn} = props

    return (

        <header className="header-main">

            <div className="header-logo-div">
                <h3><Link className="header-logo" to='/'> <img className="header-logo-img" src={process.env.PUBLIC_URL+"images/book.svg"} alt="" /> E-Book</Link></h3>
            </div>

            <nav className="header-nav">
                <ul className="header-list">
                    <li className="header-list-items"> <Link className="header-list-link" to = '/'> Home</Link></li>

                    {loggedIn ?(
                        <>
                            <li className="header-list-items"><Link className="header-list-link" to='/newBook'>Nauja knyga</Link></li>
                            <li className="header-list-items"><Link className="header-list-link" to='/logout'>Log out</Link></li>
                        
                        </>
                        
                    ): (
                        <>
                             <li className="header-list-items"> <Link className="header-list-link" to='/register'>Registruotis</Link> </li>
                             <li className="header-list-items"> <Link className="header-list-link" to = '/login'> Prisijungti</Link></li>
                        </>
                        
                        )}
                   
                    
                </ul>

            </nav>

        </header>
        
    )

}


export default Header