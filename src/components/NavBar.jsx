import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    


    return (
        <>
            <nav className='navbar'>
                <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Travel in Tents 
                    
                    <i class='fas fa-campground' />
                </NavLink>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>



                    <li className='nav-item'>
                        <NavLink
                            to={{
                                pathname: '/products',
                                state: {
                                    details: props.data
                                }
                            }}
                           
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Products
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink
                            to={{
                                pathname: '/campgrounds',
                                state: {
                                    details: props.data
                                }
                            }}
                            
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Campgrounds
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink
                            to='/login'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Login
                        </NavLink>
                    </li>

                    

                </ul>
               
            </nav>
        </>
    );
}

export default Navbar;
