import React from 'react'

import { Search } from 'react-bootstrap-icons';
import './Header.scss'

const Header = () => {
    return(
        <div className="topnav">
            <a className='logo'><img src="/Images/Logo.svg" alt="" /></a>
            <a href="#home">Home</a>
            <a href="#movies">Movies</a>
            <a href="#series">Series</a>
            <a href='#trending'>Trending</a>
            <a href='#categories'>Categories</a>
        <div className="topnav-right">
            <input className='searchbar' type='text' placeholder='Search Movies, Series...'></input>
        </div>
    </div>
    );
}

export default Header;