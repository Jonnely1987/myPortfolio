import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const CloseMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() =>{showButton();
    }, []);

    window.addEventListener('resize', showButton);


  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={CloseMobileMenu}>
                    MY PORTFOLI <i className="fa fa-podcast" aria-hidden="true"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={CloseMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={CloseMobileMenu}>
                        Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={CloseMobileMenu}>
                        Hire Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/About' className='nav-links-mobile' onClick={CloseMobileMenu}>
                        About
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>About</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar