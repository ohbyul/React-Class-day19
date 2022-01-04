import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <p className="all-menu"> menu </p>
            </div>
            <nav className="on">
                <ul>
                    <li>
                        <Link to ="/" >Home</Link>
                    </li>
                    <li>
                        <Link to ="/about" >About</Link>
                    </li>
                </ul>
                <p className="close">
                    X
                </p>
            </nav>
        </>
    );
};

export default Navbar;