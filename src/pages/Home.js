import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product';

const Home = () => {
  const API_URL = `https://fakestoreapi.com/products`;

  const [loading,setLoading] = useState(false);
  const [items,setItems] = useState([]);

  async function fetchItemData(){
    setLoading(true);

    try {
      const result = await fetch(API_URL);
      const output= await result.json();
      setItems(output); 
    } catch (error) {
      console.log(`Error in fetching data from URL`,error);
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchItemData();
  },[]);

  return (
    <div>
      {loading ? <Spinner/> : <Product items={items}/>}
    </div>
  )
}

export default Home