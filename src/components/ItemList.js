import React from 'react'
import '../css/ItemList.css'
import {MdDelete} from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import {remove} from '../redux/slice/CartSlice';

const ItemList = () => {

    const cartlist = useSelector((state) => state);
    const dispatch = useDispatch();

    function deleteCartItems(itemId) {
        dispatch(remove(itemId));
    }
    return (
        <div className='itemlist-container'>
            
                {
                    cartlist.cart.map(function (item) {
                            return (
                                <div key={item.id} className='itemlist'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <img src={item.image} alt='cart-item'/>
                                    <div className='price-section'>
                                    <p>${item.price}</p>
                                    <MdDelete onClick={()=>deleteCartItems(item.id)}/>
                                    </div>
                                </div>
                            )
                        })
                }
            
        </div>

    )
}
export default ItemList