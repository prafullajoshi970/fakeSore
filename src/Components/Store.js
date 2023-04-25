import React from 'react'
import { useState,useEffect } from 'react'
const Store = () => {

    const[data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then
        (resp=>resp.json()).then
        (data=>setData(data)).catch
        (err=>console.log(err))

    },[])
    console.log(data)
   
    
    return(
    <div className='card-data'>
        <h1>FakeStore</h1>
                         
                         {
        data.length >0 ?(
           <div className='cardContainer'>
              {
                 data.map((product)=>{
                  return( <div className='card'>
                    <img src={product.image} alt=""></img>
                    <h6>{product.title}</h6>
                    <p>{product.category}</p>
                    <p>{product.price}$</p>
  
                    </div>) 
                 })
  
              }
           </div>
        ):(<h2>NoData Found</h2>)
      }
       
       
      </div>


        )}
export default Store