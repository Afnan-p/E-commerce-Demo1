import React from 'react'
import { GrClose } from "react-icons/gr";

export const Wishlist = ({wishlist,setShowWishlist,setWishlist}) => {


    function removewishlist(id) {
        const updatelist=wishlist.filter((value)=>value.id!==id)
        setWishlist(updatelist)
        console.log(wishlist,"lissstsss");
        

    }
  return (
    <>
    
       <div className='Cart-page'style={{ position: 'absolute', right:'0' ,top:'180px',zIndex:'10'}}>
        <div className='row'>
            <div className='container-fluid align-items-center 'style={{border:'solid',width:'auto', height:'auto',borderRadius:'10px',background:'white'}}>
                <div className=' Cart-Head d-flex  justify-content-between mt-3'style={{gap:'300px'}}>
                    <div><h2>Wishlist</h2></div>
                    <button onClick={()=>setShowWishlist(false)} className='Cart-close-btn'style={{border:'none',background:'none'}}><div className=' fa-solid fa-square-xmark fa-2xl mt-3 '  style={{color:'#ff5757'}}></div></button>
                    
                </div>
                <div className='Cart-content p-3'>
                    
                      {wishlist.length === 0 ?(
                   <p style={{ color: "gray",fontSize:'20px' }}>No Wish items yet!</p>

                      ):(
                  wishlist.map((item,index )=>(
              <div className='cart-product col-md-12 mb-3 d-flex gap-4 ' key={index} style={{width:'auto', height:'auto'}}>
               <img className='cardimage p-3' src={item.image} alt="rdfghjk" style={{ height: '150px',width:'150px', objectFit: 'contain' }} />
               <div className='Product-details'>
                <div className='d-flex gap-5'>
               <div className='titile '><h4><b>{item.title}</b></h4></div>
               <div className='close-btn'><button onClick={()=>removewishlist(item.id)} className='Cart-close-btn'style={{border:'none',background:'none'}}><div ><GrClose /></div></button>
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
                  ))) }
    </div>
                </div>
                  
    
            </div>
        </div>
    
    
    </>
  )
}
