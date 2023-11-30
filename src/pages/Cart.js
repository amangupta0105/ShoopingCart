import React from 'react'
import '../css/Cart.css'
import {useSelector} from 'react-redux'
import ItemList from '../components/ItemList'
import {NavLink} from 'react-router-dom'

const Cart = () => {
    const cartlist = useSelector((state) => state);
    function calculateTotalAmount() {
        return cartlist
            .cart
            .reduce((total, item) => total + item.price, 0)
            .toFixed(2);
    }
    return (
        <div className='cart-container'>
            <div className='cart-list'>
                {
                    cartlist.cart.length > 0
                        ? <ItemList/>
                        : <h1>No Items in Cart</h1>
                }
            </div>
            <div className='cart-price'>
                <h2>YOUR CART</h2>
                <h3>SUMMARY</h3>
                <div className='cart-value'>
                    <p>Total Items:{cartlist.cart.length}</p>
                    <p>Total Amount:${calculateTotalAmount()}</p>
                    <button>
                        <NavLink to='/'>
                            Checkout Now
                        </NavLink>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Cart