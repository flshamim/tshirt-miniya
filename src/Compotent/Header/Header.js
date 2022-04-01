import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='h-container'>
                <img className='logo' src="https://images.prismic.io/rushordertees-web/c46d32cd-469a-49a9-b175-7362171d29a7_Custom+Short+Sleeve+T-Shirt.jpg?auto=compress%2Cformat&rect=0%2C0%2C800%2C900&w=800" alt="" />
                <h1 className='shop-name'>T-Shirt House</h1>
            </div>
            <div className='all-link'>
                <Link className='nav-link' to='/home'>Home</Link>
                <Link className='nav-link' to='/orderrivew'>OrderRivew</Link>
                <Link className='nav-link' to='/about' >About</Link>
            </div>
        </div>
    );
};

export default Header;