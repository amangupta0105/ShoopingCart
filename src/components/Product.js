import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import  { add, remove } from '../redux/slice/CartSlice';
import {toast} from 'react-hot-toast'
import '../css/Product.css';

const Product = ({items}) => {

    const dispatch = useDispatch();
    const {cart} = useSelector((state)=>state);

    function addItem(item){
        dispatch(add(item));
        toast.success('Item Added to Cart')
    }
    function removeItem(itemId){
        dispatch(remove(itemId));
        toast.error('Item Removed from Cart');
    }

    return (
        <div className='product-container'>
            {
                items.map((item) => (
                    <div className='product' key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{(item.description)}</p>
                        <img src={item.image} alt='item'  />
                        <div className='product-value'>
                            <p>${item.price}</p>
                            {
                            cart.some(data => data.id === item.id) 
                            ? 
                            <button onClick={()=> removeItem(item.id)}>Remove from Cart</button>:
                             <button onClick={()=> addItem(item)}>Add to Cart</button>
                            }                         
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Product;
