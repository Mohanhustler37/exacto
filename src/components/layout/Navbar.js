import React from 'react';
import logo from '../../assets/images/exacto-logo.png';
import user from '../../assets/images/user1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        // Nav bar
        <header>
            <nav className="nav">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <ul>
                        <li>
                            <a href="/">
                                <FontAwesomeIcon icon={faBell} className="icons" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={user} alt="user" />
                            </a>
                        </li>
                        <li>
                            <span>Vignesh K</span>
                        </li>
                        <li>
                            <a href="/">
                                <FontAwesomeIcon icon={faAngleDown} className="icons" />
                            </a>
                        </li>
                    </ul>
                {/* </div> */}
            </nav>
        </header>
    )
}

export default Navbar
