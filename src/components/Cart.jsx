import React, { useEffect, useState } from 'react'
import './Cart.css'
import { GrClose } from "react-icons/gr";

const Cart = ({setShowCart,cartItems,setCartItems}) => {
    // console.log(cartItems,"daaatatatat");
    const [cartnull,setCartnull]=useState(false)


    
       function Removeitem(id) {
        // console.log(product,"prooooo");
        const updatedCart =cartItems.filter((item)=>item.id !==id)
        setCartItems(updatedCart)
       }
  return (
  
    
   <div className='Cart-page'style={{ position: 'absolute', right:'0' ,top:'200px',zIndex:'10'}}>
        <div className='container-fluid align-items-center 'style={{border:'solid',width:'550px', height:'auto',borderRadius:'10px',background:'white'}}>
            <div className='Cart-Head d-flex justify-content-between mt-3'>
                <div><h2>Cart</h2></div>
                <button onClick={()=>setShowCart(false)} className='Cart-close-btn'style={{border:'none',background:'none'}}><div className=' fa-solid fa-square-xmark fa-2xl mt-3 '  style={{color:'red'}}></div></button>
                
            </div>
            <div className='Cart-content p-3'>
                <div className='row'>
                  {cartItems.length === 0 ?(
                    <p style={{ color: "gray",fontSize:'20px' }}>No cart items yet.</p>
                  ):(
              cartItems.map((item,index )=>(
          <div className='cart-product col-md-12 mb-3 d-flex gap-4 ' key={index} style={{width:'auto', height:'auto'}}>
           <img className='cardimage p-3' src={item.image} alt="rdfghjk" style={{ height: '150px',width:'150px', objectFit: 'contain' }} />
           <div className='Product-details'>
            <div className='d-flex gap-5'>
           <div className='titile '><h4><b>{item.title}</b></h4></div>
           <div className='close-btn'><button onClick={()=>Removeitem(item.id)} className='Cart-close-btn'style={{border:'none',background:'none'}}><div ><GrClose /></div></button>
</div>
           </div>
           <div className='price'>{item.description.slice(0, 30)}</div>
           <div className='d-flex  mt-4 gap-4 mb-3'>
           <div className='price'style={{fontSize:'25px'}}><b>Rs{item.price*20}/-</b></div>
           <div className='+-btns d-flex '> 
            <div className='negative fa-solid fa-square-minus fa-2xl mt-3'style={{color:'#ff5757'}}></div>
            <div className='box ms-2'></div>
            <div className='plus fa-solid fa-square-plus fa-2xl ms-2 mt-3'style={{color:'#ff5757'}}> </div>
           </div>
           </div>
           </div>
            </div>
              )))}
</div>
            </div>
             <div className='Promocode p-2'><input type="text" placeholder='Enter Your Promocode'
              style={{height:'60px',width:'350px',borderRadius:'8px',fontSize:'23px'}}/>
              <button className='Applay-btn ms-4' 
              style={{height:'60px',width:'130px', backgroundColor:'#ff5757 ',color:'white',borderRadius:'8px'}}>Applay</button>
              </div>

        </div>
    </div>
 
  )
}

export default Cart


