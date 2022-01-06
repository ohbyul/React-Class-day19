import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navData from './navData';

const Navbar = () => {
    const [navBar , setNavBar] = useState( false )

    const onToggle = ()  => {
        setNavBar( !navBar )
    }

    return (
        <>
            <div className='navbar'>
                <p className='all-menu' onClick={ onToggle }> menu </p>
            </div>
            <nav className={ navBar ? 'on' : ''}>
                <ul>                    
                   {
                       navData.map( (item , index ) => <li key={index}>
                       <Link to={ item.path }> { item.title } </Link> 
                   </li>)
                   }                   
                </ul>
                <p  className='close' onClick={ () => setNavBar(false) }>
                    X
                </p>
            </nav> 
        </>
    );
};

export default Navbar;