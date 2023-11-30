import React from 'react'
import {NavLink} from 'react-router-dom'
import {IoCartOutline} from "react-icons/io5";
import '../css/Navbar.css';
import { useSelector } from 'react-redux'

const Navbar = () => {

    const count = useSelector((state)=> state);
    
    return (
        <div className='navbar-container'>
            <NavLink to='/'>
                <div className='navbar-logo'>
                    <img
                        src="https://img.icons8.com/external-filled-outline-lima-studio/64/external-e-commerce-e-commerce-filled-outline-lima-studio-2.png"
                        alt="Website Logo"/>
                </div>
            </NavLink>
            <div className='navbar-links'>
                <NavLink to='/'>
                    <p className='navbar-home'>Home</p>
                </NavLink>
                <NavLink to='/cart'>
                    <IoCartOutline className='navbar-cart-icon'/>
                    {count.cart.length >0 ? <div className='cart-items'> {count.cart.length} </div>: ''}
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar