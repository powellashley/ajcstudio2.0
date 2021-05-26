import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from './Button';
import './NavBar.css';


export default function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerwidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
 
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {button && <Button buttonStyle='btn--outline'>
                    <NavLink
                        to="/"
                        exact
                        className="inline-flex items-center py-2 px-3 mr-4 tracking-wide"
                    >
                        <span className="bodyfont">ashleyjames</span>
                        <span className="boldfont">creative</span>
                    </NavLink>
                    </Button>}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-links bodyfont' activeClassName='boldfont' onClick={closeMobileMenu}>
                                About Me
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/resume' className='nav-links bodyfont' activeClassName='boldfont' onClick={closeMobileMenu}>
                                CV
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/portfolio' className='nav-links bodyfont' activeClassName='boldfont' onClick={closeMobileMenu}>
                                Portfolio
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/blog' className='nav-links bodyfont' activeClassName='boldfont' onClick={closeMobileMenu}>
                                Blog
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/contact' className='nav-links bodyfont' activeClassName='boldfont' onClick={closeMobileMenu}>
                                Contact
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <div className="socialItems inline-flex py-2">
                                <div className='socialcolumn items-center p-1'>
                                <a href="https://www.instagram.com/ashleyjamescreative/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485242ba59c1d1596e0_Instagram.png' alt="Link to my Instagram" width="30px" height="auto"/></a>
                                </div>
                                <div Class='socialcolumn items-center p-1'>
                                    <a href="https://www.pinterest.co.uk/ashleyjames_interiors/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485e1a137f2f2f36096_Pinterest.png' alt="Link to my Pinterest" width="30px" height="auto"/></a>
                                </div>
                                <div Class='socialcolumn items-center p-1'>
                                    <a href="https://www.linkedin.com/in/ashley-powell-98000719a/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485ec20c2b6b059ab44_LinkedIn.png' alt="Link to my LinkedIn" width="30px" height="auto"/></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}